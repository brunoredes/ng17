import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-empty-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './empty-list.component.html',
    styleUrl: './empty-list.component.scss',
})
export class EmptyListComponent {}
