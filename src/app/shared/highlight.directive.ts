import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() appHighlight?: string;
  @Input() defaultColor?: string;

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

  ngOnInit() {
    this.backgroundColor = this.defaultColor || 'LightCyan';
  }
  @HostListener('mouseenter') evidenzia(event: Event) {
    this.backgroundColor = this.appHighlight || 'Cyan';
  }
  @HostListener('mouseleave') rilascia(event: Event) {
    this.backgroundColor = this.defaultColor || 'LightCyan';
  }
}
