import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {

  public forma: FormGroup;

  constructor() { }

  ngOnInit() {
    this.forma = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.email,  Validators.required]),
      'telefono': new FormControl('', Validators.required),
      'asunto': new FormControl('', Validators.required),
      'mensaje': new FormControl('', Validators.required)
    });
  }

  public submit() {
    console.log(this.forma);
  }

}
