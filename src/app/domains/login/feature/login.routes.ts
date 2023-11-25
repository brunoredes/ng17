import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const FEATURE_LOGIN_ROUTES: Routes = [
    { path: 'login', loadComponent: () => LoginComponent },
];
