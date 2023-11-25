import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public login = (username: string) => {
        if (!username) {
            throw new Error('Username cannot be empty');
        }
        localStorage.setItem('username', username);
    };

    public retrieveUsername = () => {
        return localStorage.getItem('username');
    };
}
