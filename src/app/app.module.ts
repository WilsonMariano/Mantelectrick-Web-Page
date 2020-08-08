import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PorqueElegirnosComponent } from './components/porque-elegirnos/porque-elegirnos.component';
import { NuestrosServiciosComponent } from './components/nuestros-servicios/nuestros-servicios.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CounterComponent } from './components/counter/counter.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ProyectosRealizadosComponent } from './components/proyectos-realizados/proyectos-realizados.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    PorqueElegirnosComponent,
    NuestrosServiciosComponent,
    ParallaxComponent,
    FooterComponent,
    CounterComponent,
    QuienesSomosComponent,
    ProyectosRealizadosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
