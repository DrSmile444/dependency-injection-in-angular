import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({selector: '[appChangeText]'})
export class ChangeTextDirective implements AfterViewInit {
  @Input() appChangeText: string = 'Check it out';

  private elementText: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.elementText = this.el.nativeElement.innerText;
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.changeText(this.appChangeText);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.changeText(this.elementText);
  }

  private changeText(text: string): void {
    this.el.nativeElement.innerText = text;
  }
}
