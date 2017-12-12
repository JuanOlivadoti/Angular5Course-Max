import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    // serverId = 10;
    serverId: number = 10; //Typescript
    // serverStatus = 'offline';
    serverStatus: string = 'offline'; //Typescript

    getServerStatus(){
        return this.serverStatus;
    }
}