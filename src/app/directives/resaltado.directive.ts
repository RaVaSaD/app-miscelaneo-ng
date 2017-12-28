import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef ) {
    // console.log("Directiva llamada");
    // el.nativeElement.style.backgroundColor = "yellow";
  }

  // Indica que viene un parámetro de entrada nuevoColor
  @Input("appResaltado") nuevoColor:string;

  // mouseEntro() se considera un alias de @HostListener('mouseenter')
  @HostListener('mouseenter') mouseEntro(){
    this.resaltar( this.nuevoColor || 'yellow' );
  }

  // mouseSalio() se considera un alias de @HostListener('mouseleave')
  @HostListener('mouseleave') mouseSalio(){
    this.resaltar( null );
  }

  private resaltar( color:string ){
    this.el.nativeElement.style.backgroundColor = color;
  }


}
