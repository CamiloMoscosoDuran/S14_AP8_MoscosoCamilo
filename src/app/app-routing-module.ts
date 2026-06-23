import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Juegos } from './pages/juegos/juegos';
import { Noticias } from './pages/noticias/noticias';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  // Redirige la raíz al login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Página de autenticación (pública)
  {
    path: 'login',
    component: Login
  },

  // Rutas protegidas — requieren sesión iniciada
  {
    path: 'home',
    component: Home,
    canActivate: [AuthGuard]
  },

  {
    path: 'juegos',
    component: Juegos,
    canActivate: [AuthGuard]
  },

  {
    path: 'noticias',
    component: Noticias,
    canActivate: [AuthGuard]
  },

  {
    path: 'contacto',
    component: Contacto,
    canActivate: [AuthGuard]
  },

  // Ruta comodín: redirige a login
  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
