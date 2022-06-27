import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageSignInComponent} from "./login/pages/page-sign-in/page-sign-in.component";
import {PageSignUpComponent} from "./login/pages/page-sign-up/page-sign-up.component";
import {PageResetPasswordComponent} from "./login/pages/page-reset-password/page-reset-password.component";
import {PageForgotPasswordComponent} from "./login/pages/page-forgot-password/page-forgot-password.component";

const routes: Routes = [
  { path : "", redirectTo: "sign-in", pathMatch: "full" },
  { path : "sign-in", component: PageSignInComponent },
  { path : "sign-up", component: PageSignUpComponent },
  { path : "reset", component: PageResetPasswordComponent },
  { path : "forgot", component: PageForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
