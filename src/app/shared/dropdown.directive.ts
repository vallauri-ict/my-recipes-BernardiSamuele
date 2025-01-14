import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true,
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if (this.el.nativeElement.contains(event.target)) {
      this.isOpen = !this.isOpen;
    } else {
      this.isOpen = false;
    }
  }
  constructor(private el: ElementRef) {}
}
