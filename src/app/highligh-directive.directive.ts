import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighDirective]'
})
export class HighlighDirectiveDirective {

  constructor(private balise:ElementRef, private render:Renderer2) { }

  @HostListener('mouseenter') onClick(){
    this.render.addClass(this.balise.nativeElement , 'highlight');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.render.removeClass(this.balise.nativeElement , 'highlight');
  }

}
