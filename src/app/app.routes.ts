import { Routes } from '@angular/router';
import { FormAgregarSkillComponent } from './form-agregar-skill/form-agregar-skill.component';
import { FormAgregarProyectoComponent } from './form-agregar-proyecto/form-agregar-proyecto.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'agregar-skill', component: FormAgregarSkillComponent},
    { path: 'agregar-proyecto', component: FormAgregarProyectoComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ]


