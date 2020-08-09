import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public faEnvelope = faEnvelope;
  public faPhone = faPhone;

  constructor() { }

  ngOnInit() {
  }

}
