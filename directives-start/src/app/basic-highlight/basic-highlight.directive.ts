import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: '[appBasicHighlight]' //cuando se lo agrego como atributo a un elemento del dom
})

export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {

        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = '#FFF';
    }
}