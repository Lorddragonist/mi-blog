import { Routes } from '@angular/router';
import { ContactameComponent } from './pages/contactame/contactame.component';
import { PerfilProfesionalComponent } from './pages/perfil-profesional/perfil-profesional.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { EstudiosComponent } from './pages/estudios/estudios.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full',
  },
  {
    path: 'contactame',
    component: ContactameComponent,
  },
  {
    path: 'perfil-profesional',
    component: PerfilProfesionalComponent,
  },
  {
    path: 'experiencia',
    component: ExperienciaComponent,
  },
  {
    path: 'estudios',
    component: EstudiosComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
];
