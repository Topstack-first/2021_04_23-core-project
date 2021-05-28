import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./views/login/login.component";
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { ForgotPasswordComponent } from "./views/forgot-password/forgot-password.component";

import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

import { AuthLogoModule } from './shared/auth-logo/auth-logo.module';
import { NavUserInfoModule } from './shared/nav-user-info/nav-user-info.module';
import { SidenavLayoutComponent } from './layouts/sidenav-layout/sidenav-layout.component';
import { AllUsersComponent } from './views/all-users/all-users.component';

const appRoutes: Routes = [
	{
		path: '',
		component: HomeLayoutComponent,
	},
	{ path: 'login', component: LoginComponent },
	{ path: 'forgot-password', component: ForgotPasswordComponent },
	{ path: 'create-account', component: CreateAccountComponent },
	{
		path: 'core',
		component: SidenavLayoutComponent,
		children: [
			{ path: 'bulk-uploader', loadChildren: () => import('./views/bulk/bulk.module').then(m => m.BulkModule) },
			{ path: 'document', loadChildren: () => import('./views/document/document.module').then(m => m.DocumentModule) },
			{ path: 'all-users', component: AllUsersComponent }
		]
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	declarations: [
		LoginComponent,
		ForgotPasswordComponent,
		CreateAccountComponent,
		HomeLayoutComponent,
		SidenavLayoutComponent
	],
	imports: [
		CommonModule,
		RouterModule.forRoot(appRoutes),
		AuthLogoModule,
		NavUserInfoModule
	],
	exports: [RouterModule]
})

export class AppRoutingModule { }