#addin "nuget:?package=EnvironmentBuilder&version=1.0.0"
#addin "nuget:?package=Cake.Npm&version=0.16.0"
using EnvironmentBuilder.Extensions;

#region ARGUMENTS
var env=EnvironmentBuilder.EnvironmentManager.Create(config=>
   config.WithEnvironmentVariablePrefix("cake_"));

var target=env.Arg("target").Arg("t").Env("target").Default("Help").Bundle();
var configuration=env.Arg("configuration").Arg("c").Env("configuration").Default("Debug").Bundle();
var output=env.Arg("output").Arg("o").Env("output").Default(".").Bundle();
var baseHref=env.With("base-href").Arg().Env().Default("https://denisekart.github.io/").Bundle();
var nugetApiKey=env.WithEnvironmentVariable("NUGET_API_KEY",config=>
config.WithNoEnvironmentVariablePrefix()
.SetEnvironmentTarget(EnvironmentVariableTarget.Machine))
.Throw("Missing nuget api key").Bundle();

#endregion //ARGUMENTS

#region VARIABLES
var mainProject=env.Default("./../src/personal").Bundle();
var ignore=env.Default(new []{
   "README.md",
   "LICENSE",
   "src",
   "build",
   "tools",
   ".git",
   ".gitignore"
}).Build<IEnumerable<string>>();
#endregion //VARIABLES

#region TASKS
Task("Clean")
   .Description("Runs the clean task")
   .Does(()=>{
      Information("Running clean...");
      var dirs=GetDirectories(output.Build()+"/../*");
      var files=GetFiles(output.Build()+"/../*");
      foreach(var i in dirs){
         Information(i);
         if(ignore.Any(x=>i.FullPath.EndsWith(x)))
            Information($"Ignoring directory {i}");
         else{
            Information($"Deleting directory {i}");
            DeleteDirectory(i,new DeleteDirectorySettings{Recursive=true});
         }
      }
      foreach(var i in files){
         Information(i);
         if(ignore.Any(x=>i.FullPath.EndsWith(x)))
            Information($"Ignoring file {i}");
         else{
            Information($"Deleting file {i}");
            DeleteFile(i);
         }
      }
   });
Task("Restore")
   .Does(()=>{
      Information("Running npm install...");
      NpmInstall(settings=>{
         settings.WorkingDirectory=Directory(mainProject.Build());
         settings.Production=configuration.Build()=="Release";
         });

      var setup=new NpmInstallSettings{
         Global=true,
      };
      setup.Packages.Add("@angular/cli");
      Information("Running angular install...");
      NpmInstall(setup);
   });

Task("Build")
   .IsDependentOn("Restore")
   .Does(()=>{
     Information("Running build...");
     NpmRunScript(configuration.Build()=="Release"?"build-prod":"build",
     settings=>{
         settings.Arguments.Add("--base-href="+baseHref.Build());
         settings.Arguments.Add("--output-path="+output.Build()+"/../../dist");
         settings.WorkingDirectory=Directory(mainProject.Build());
      });
   });

Task("Publish")
   .IsDependentOn("Clean")
   .IsDependentOn("Build")
   .Does(()=>{
      Information("Publishing app to root...");
      CopyFiles(output.Build()+"/../dist/*",output.Build()+"/../",true);
      CreateDirectory(output.Build()+"/../assets");
      CopyDirectory(output.Build()+"/../dist/assets",output.Build()+"/../assets");
   });


#endregion //TASKS

#region MISC
Task("Help")
.Does(()=>{
   Information(env.GetHelp());
   });

#endregion //MISC




RunTarget(target.Build());