import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed = false;
  isRecipe: boolean = true;
  @Output() featureSelected = new EventEmitter<boolean>();

  onSelect(feature: string) {
    this.isRecipe = feature === 'recipes';
    this.featureSelected.emit(this.isRecipe);
  }
}
