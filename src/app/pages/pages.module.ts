import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component'
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    ContactoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    APP_ROUTES
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
