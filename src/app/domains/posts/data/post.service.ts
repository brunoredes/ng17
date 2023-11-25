import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    private readonly http: HttpClient = inject(HttpClient);

    private posts$: Observable<Post[]> = this.http.get<Post[]>(
        `${environment.baseUrl}/posts?_limit=10`,
    );

    public posts = toSignal(this.posts$, { initialValue: [] as Post[] });
}

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
