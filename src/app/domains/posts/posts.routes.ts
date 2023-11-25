import { Routes } from '@angular/router';
import { ListComponent } from './feature/list/list.component';
import { PostsComponent } from './feature/posts/posts.component';
import { ViewPostComponent } from './feature/view-post/view-post.component';

export const FEATURE_POSTS_ROUTES: Routes = [
    {
        path: 'posts',
        loadComponent: () => PostsComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListComponent },
            { path: ':id', loadComponent: () => ViewPostComponent },
        ],
    },
];
