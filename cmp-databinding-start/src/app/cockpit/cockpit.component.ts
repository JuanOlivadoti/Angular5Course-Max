import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
// import { ElementRef } from '@angular/core/src/linker/element_ref';
// import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) { //serverNameInput
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    // console.log(nameInput.value)//Local references
    // console.log(this.serverContentInput)
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });

    this.blueprintCreated.emit({
      serverName: nameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
