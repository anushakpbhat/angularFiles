import { Directive,ElementRef,Renderer2} from '@angular/core';

@Directive({
  selector: '[appNew]'
})
export class NewDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { 
   
    }
    ngOnInit(){
      this.renderer.setStyle(this.el.nativeElement,'background-color','pink');
      this.renderer.setStyle(this.el.nativeElement,'font-style','italic');
      this.renderer.setStyle(this.el.nativeElement,'margin-right','600px');
      this.renderer.setStyle(this.el.nativeElement,'font-size','25px');
      this.renderer.setStyle(this.el.nativeElement,'text-align','center');
      this.renderer.setStyle(this.el.nativeElement,'margin-left','200px');
  }

}
