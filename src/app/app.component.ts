import { Component, OnInit } from '@angular/core';
declare var init_plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'mantelectrick';

  ngOnInit() {
    init_plugins();
  }
}
