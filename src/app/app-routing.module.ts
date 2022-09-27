import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"question-form",component:QuestionFormComponent},
  {path:"result",component:ResultComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
