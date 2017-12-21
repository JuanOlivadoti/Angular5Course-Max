import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'cyan';
  // @Input('appBetterHighlight') highlightColor: string = 'dodgerblue'; SOLO SI DESEO BINDEAR ELEMENTOS CON EL MISMO SELECTOR DE DIRECTIVAS
  @Input() highlightColor: string = 'dodgerblue';

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; puedo declarar un valor default
  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

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
    // this.backgroundColor = 'dodgerblue';
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'lime'
    // )
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.defaultColor;
  }

}
