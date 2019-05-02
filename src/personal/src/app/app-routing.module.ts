import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { GithubComponent } from './components/github/github.component';
import { StaticResumeComponent } from './components/static-resume/static-resume.component';

const routes: Routes = [
  {path:"home",  pathMatch: "full",redirectTo:""},
  {path:"", component:HomeComponent},
  {path:"resume", component:StaticResumeComponent},
  {path:"github", component:GithubComponent},
  {path: "**", pathMatch: "full", redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
