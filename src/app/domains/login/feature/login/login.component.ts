import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormControl,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';
import { AuthService } from '@shared/util-auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    private readonly authService: AuthService = inject(AuthService);
    private readonly formBuilder = inject(NonNullableFormBuilder);
    private readonly router = inject(Router);

    public loginForm: LoginForm = this.formBuilder.group({
        username: this.formBuilder.control(
            { value: '', disabled: false },
            { validators: [Validators.required] },
        ),
    });

    public submitForm() {
        this.validateForm();
        if (this.loginForm.valid) {
            const username = this.loginForm.getRawValue().username;
            this.authService.login(username);
            this.router.navigateByUrl('/posts');
        }
    }

    private validateForm() {
        const username = this.loginForm.controls.username.value;
        if (username.trim() === '') {
            this.loginForm.controls.username.setErrors({
                notEmptyUsername: true,
            });
        }
    }
}

type LoginForm = FormGroup<{
    username: FormControl<string>;
}>;
