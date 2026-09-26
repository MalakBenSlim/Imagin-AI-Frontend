import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    console.log('Tentative de connexion...', this.email, this.password);
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    this.isLoading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('✅ Success:', response);

        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('isLoggedIn', 'true');
        }

        this.isLoading = false;
        alert('✅ Sayé tconnectit! Bienvenue ' + response.user.username);
        this.router.navigate(['/transform']);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('❌ Erreur:', error);

        if (error.status === 401) {
          this.errorMessage = 'Email ou mot de passe incorrect';
        } else if (error.status === 0) {
          this.errorMessage = 'Impossible de contacter le serveur (vérifie que le backend tourne)';
        } else {
          this.errorMessage = 'Erreur serveur ou Backend mouch ma7loul';
        }
      }
    });
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}