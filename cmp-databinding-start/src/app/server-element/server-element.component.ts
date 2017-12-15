import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated // DEFAULT MODE
  // encapsulation: ViewEncapsulation.Native // Shadow dom MODE no todos los navegadores lo soportan
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { };

  ngOnInit() {
  }

}
