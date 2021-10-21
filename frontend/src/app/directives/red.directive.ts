import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // Diretiva de Atributo
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
   }

}
