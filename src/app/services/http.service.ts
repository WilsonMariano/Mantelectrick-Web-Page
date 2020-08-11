import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
declare var swal;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public loading = false;

  constructor(private _http: HttpClient) { }

  public sendMessage(forma): void {
    this.loading = true;
    
    this._http.post(environment.urlMailServer, forma.value)
      .subscribe(
        data => {
          setTimeout(() => {
            this.loading = false;
            swal("¡Mensaje enviado!", "Gracias por dejarnos tu mensaje, a la brevedad te estaremos contactando", "success");
            forma.reset();
          }, 500);
        },
        err => {
          setTimeout(() => {
            this.loading = false, 500;
            swal("¡Aviso importante!", "Ha ocurrido un error al enviar el mensaje, intente de nuevo más tarde.", "error");
          });
        }
    );
  }
}
