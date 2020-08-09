import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CarouselComponent } from './carousel/carousel.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CounterComponent } from './counter/counter.component';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { PorqueElegirnosComponent } from './porque-elegirnos/porque-elegirnos.component';
import { ProyectosRealizadosComponent } from './proyectos-realizados/proyectos-realizados.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';




@NgModule({
  declarations: [
    CarouselComponent,
    ContactoComponent,
    CounterComponent,
    NuestrosServiciosComponent,
    ParallaxComponent,
    PorqueElegirnosComponent,
    ProyectosRealizadosComponent,
    QuienesSomosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    CarouselComponent,
    ContactoComponent,
    CounterComponent,
    NuestrosServiciosComponent,
    ParallaxComponent,
    PorqueElegirnosComponent,
    ProyectosRealizadosComponent,
    QuienesSomosComponent
  ]
})
export class ComponentsModule { }
