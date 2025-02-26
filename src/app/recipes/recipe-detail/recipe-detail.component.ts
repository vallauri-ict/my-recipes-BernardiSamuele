import { Component } from '@angular/core';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeService.selectedRecipe?.ingredients!
    );
  }
  constructor(public recipeService: RecipeService) {}
}
