import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {

  public forma: FormGroup;
  public faSpinner = faSpinner;

  constructor(public _http: HttpService) { }

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
    if(this.forma.valid) {
      this._http.sendMessage(this.forma);
    }
  }

}
