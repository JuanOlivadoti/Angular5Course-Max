import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', //seleccionar por atributos <div app-servers>
  // selector: '.app-servers', //seleccionar por clase <div class="app-servers"> //no funciona con id
  // template: `<app-server></app-server>
  //             <app-server></app-server>`, //cuando el html es pequeño.
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server Was Created!";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'TestServer2']
  // username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() { }

  // onResetUsernameClick(event: Event) {
  //   this.username = '';
  // }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Was Created!! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
