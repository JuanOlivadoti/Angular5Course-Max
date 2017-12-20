import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; puedo declarar un valor default
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'dodgerblue'
    // )
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'dodgerblue'
    // )
    this.backgroundColor = 'dodgerblue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'lime'
    // )
    this.backgroundColor = 'blue';
  }

}
