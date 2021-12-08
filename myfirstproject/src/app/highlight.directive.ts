import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { }
  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement,'background-color','lightblue');
    this.renderer.setStyle(this.el.nativeElement,'margin-right','200px');
    this.renderer.setStyle(this.el.nativeElement,'margin-left','600px');
    this.renderer.setStyle(this.el.nativeElement,'font-size','30px');
    this.renderer.setStyle(this.el.nativeElement,'color','red');
    this.renderer.setStyle(this.el.nativeElement,'text-align','center');
    this.renderer.setStyle(this.el.nativeElement,'font-style','italic');
}

}
