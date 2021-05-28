import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavUserInfoComponent } from './nav-user-info.component';



@NgModule({
  declarations: [NavUserInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [NavUserInfoComponent]
})
export class NavUserInfoModule { }
