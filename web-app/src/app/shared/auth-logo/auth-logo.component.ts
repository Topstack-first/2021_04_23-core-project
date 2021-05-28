import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-logo',
  templateUrl: './auth-logo.component.html'
})
export class AuthLogoComponent implements OnInit {
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
