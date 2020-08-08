import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'contacto', component: ContactoComponent }
    // { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes );
