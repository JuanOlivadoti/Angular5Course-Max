import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server>
  //             <app-server></app-server>`, //cuando el html es pequeño.
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
