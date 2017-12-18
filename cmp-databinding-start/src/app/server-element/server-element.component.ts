import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';
// import { ElementRef } from '@angular/core/src/linker/element_ref';
// import {  } from '@angular/core/src/metadata/di';
// import {  } from '@angular/core/src/metadata/lifecycle_hooks';
// import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
// import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated // DEFAULT MODE
  // encapsulation: ViewEncapsulation.Native // Shadow dom MODE no todos los navegadores lo soportan
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  };

  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('onChanges called');
    console.log(changes);
    console.log('Text content of paragraph' + this.paragraph.nativeElement.textContent);

  }
  ngOnInit() {
    console.log('onInit');
    console.log('Text Content' + this.header.nativeElement.textContent);


  }

  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('DoCheck called');

  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('aftercontentinit called');

    console.log('Text content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('content checked');

  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('afterviewinit');
    console.log('Text Content' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('afterviewChecked');

  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destroyed');

  }
}
