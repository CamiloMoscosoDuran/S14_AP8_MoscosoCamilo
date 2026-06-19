import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Credenciales simuladas
  private readonly VALID_EMAIL = 'admin@gamezone.com';
  private readonly VALID_PASSWORD = '123456';

  private readonly SESSION_KEY = 'gz_session';

  /** Verifica credenciales y guarda sesión si son correctas */
  login(email: string, password: string): boolean {
    if (email === this.VALID_EMAIL && password === this.VALID_PASSWORD) {
      localStorage.setItem(this.SESSION_KEY, 'true');
      return true;
    }
    return false;
  }

  /** Elimina la sesión activa */
  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  /** Indica si hay sesión activa */
  isLoggedIn(): boolean {
    return localStorage.getItem(this.SESSION_KEY) === 'true';
  }
}
