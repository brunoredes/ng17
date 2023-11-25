import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '@posts/data/post.service';
import { EmptyListComponent } from '@shared/ui-common/empty-list/empty-list.component';
import { CardComponent } from '@posts/components/card/card.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [CommonModule, EmptyListComponent, CardComponent],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
    private readonly postService = inject(PostService);
    private readonly router = inject(Router);

    public posts = this.postService.posts;

    public goToPost(id: number) {
        this.router.navigate(['posts', id]);
    }
}
