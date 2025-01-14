import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../../models/recipe.model';
import { HighlightDirective } from '../../../shared/highlight.directive';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe!: RecipeModel;
  @Output() recipeItemSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeItemSelected.emit();
  }
}
