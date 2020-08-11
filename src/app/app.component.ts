import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
declare var init_plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public spinBdColor = "#fff";
  public spinSize = "medium";
  public spinColor = "#911318";
  public spinType = "square-jelly-box";
  public spinFullScreen = "fullScreen";

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 1000);
    init_plugins();
  }
}
