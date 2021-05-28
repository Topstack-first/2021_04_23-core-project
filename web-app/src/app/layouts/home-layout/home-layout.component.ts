import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-home',
  templateUrl: './home-layout.component.html',
})
export class HomeLayoutComponent implements OnInit {
  constructor(private router: Router) { }

  year = new Date().getFullYear();

  logout() {
    localStorage.clear();

    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }
}
