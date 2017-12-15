import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'TestServer', content: 'Just a test!' }];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      // name: this.newServerName,
      name: serverData.serverName,
      // content: this.newServerContent
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      // name: this.newServerName,
      name: blueprintData.serverName,
      // content: this.newServerContent
      content: blueprintData.serverContent
    });
  }

}
