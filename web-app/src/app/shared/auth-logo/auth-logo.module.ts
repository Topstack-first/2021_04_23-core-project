import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLogoComponent } from './auth-logo.component';



@NgModule({
  declarations: [AuthLogoComponent],
  imports: [
    CommonModule
  ],
  exports: [AuthLogoComponent]
})

export class AuthLogoModule { }
