import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
    // Check if user is already logged in from localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  get isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }

  login(loginData: LoginRequest): boolean {
    // Simple authentication logic - you can replace this with actual API call
    if (loginData.username === 'admin' && loginData.password === 'admin') {
      const user: User = {
        username: loginData.username,
        role: 'admin'
      };
      
      // Save to localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return true;
    } else if (loginData.username === 'user' && loginData.password === 'user') {
      const user: User = {
        username: loginData.username,
        role: 'user'
      };
      
      // Save to localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return true;
    }
    
    return false;
  }

  logout(): void {
    // Remove from localStorage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  // Check if user can access admin routes
  canAccessAdmin(): boolean {
    const user = this.currentUserValue;
    return user?.role === 'admin';
  }
} 