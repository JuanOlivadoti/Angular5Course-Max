import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(1);
    const id = +this.route.snapshot.params['id']; // '+' convierte el string de la ruta en un número compatible con el tipo de id.
    this.server = this.serversService.getServer(id);
    this.route.params
      .subscribe(
      (params: Params) => {
        this.serversService.getServer(+params['id'])
      }
      )
  }

}
