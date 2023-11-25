import { Routes } from '@angular/router';
import { authGuard } from '@shared/util-common/auth-guard.guard';
import { FEATURE_LOGIN_ROUTES } from './domains/login/feature/login.routes';
import { FEATURE_POSTS_ROUTES } from './domains/posts/posts.routes';
import { NotFoundComponent } from './shell/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: '', loadChildren: () => FEATURE_LOGIN_ROUTES },
    {
        path: '',
        loadChildren: () => FEATURE_POSTS_ROUTES,
        canActivate: [authGuard],
    },
    {
        path: '**',
        loadComponent: () => NotFoundComponent,
    },
];
