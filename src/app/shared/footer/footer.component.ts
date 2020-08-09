import { Component, OnInit } from '@angular/core';
import { faLinkedin, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  public faLinkedin = faLinkedin;
  public faFacebook = faFacebook;
  public faInstagram = faInstagram;
  public faWhatsapp = faWhatsapp;

  constructor() { }

  ngOnInit() {
  }

}
