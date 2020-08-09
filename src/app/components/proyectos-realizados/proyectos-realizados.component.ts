import { Component, OnInit } from '@angular/core';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos-realizados',
  templateUrl: './proyectos-realizados.component.html'
})
export class ProyectosRealizadosComponent implements OnInit {

  public faExpandArrows = faExpandArrowsAlt;

  constructor() { }

  ngOnInit() {
  }

}
