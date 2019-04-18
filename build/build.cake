#addin "nuget:?package=EnvironmentBuilder&version=1.0.0"
using EnvironmentBuilder.Extensions;

#region ARGUMENTS
var env=EnvironmentBuilder.EnvironmentManager.Create(config=>
   config.WithEnvironmentVariablePrefix("cake_"));

var target=env.Arg("target").Arg("t").Env("target").Default("Help").Bundle();
var configuration=env.Arg("configuration").Arg("c").Env("configuration").Default("Debug").Bundle();
var output=env.Arg("output").Arg("o").Env("output").Default("./../").Bundle();
var nugetApiKey=env.WithEnvironmentVariable("NUGET_API_KEY",config=>
config.WithNoEnvironmentVariablePrefix()
.SetEnvironmentTarget(EnvironmentVariableTarget.Machine))
.Throw("Missing nuget api key").Bundle();

#endregion //ARGUMENTS

#region VARIABLES
var mainProject=env.Default("./../src/personal").Bundle();
var ignore=env.Default(new []{
   "./..README.md",
   "LICENSE",
   "src",
   "build",
   ".git",
   ".gitignore"
}).Build<IEnumerable<string>>();
#endregion //VARIABLES

#region TASKS
Task("Clean")
   .Description("Runs the clean task")
   .Does(()=>{
      Information("Running clean...");
      var dirs=GetDirectories(output.Build()+"*");
      var files=GetFiles(output.Build()+"*");
      foreach(var i in dirs.Select(x=>x.FullPath).Except(ignore.Select(Directory).Select(x=>x.FullPath))){
         Information(i);
      }
      foreach(var i in files){
         Information(i);
         
      }
      // if(DirectoryExists(output.Build()))
      //    DeleteDirectory(output.Build(),new DeleteDirectorySettings{Recursive=true});
      // if(DirectoryExists(package.Build()))
      //    DeleteDirectory(package.Build(),new DeleteDirectorySettings{Recursive=true});

      //    var projectFiles = GetFiles("./tests/**/*.csproj")
      //    .Union(GetFiles("./src/**/*.csproj"));
      // foreach(var file in projectFiles)
      // {
      //    DotNetCoreClean(file.FullPath);
      // }
   });
Task("Restore")
   .Description("Runs the nuget restore task")
   .Does(()=>{
      Information("Running restore for all projects...");
      DotNetCoreRestore();
   });

Task("Build")
   .Description("Runs the build task")
   .IsDependentOn("Restore")
   .Does(()=>{
     
   });


#endregion //TASKS

#region MISC
Task("Help")
.Does(()=>{
   Information(env.GetHelp());
   });

#endregion //MISC




RunTarget(target.Build());