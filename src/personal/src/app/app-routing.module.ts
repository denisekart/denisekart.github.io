import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { GithubComponent } from './components/github/github.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"resume", component:ResumeComponent},
  {path:"github", component:GithubComponent},
  {path: "**", pathMatch: "full", redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
