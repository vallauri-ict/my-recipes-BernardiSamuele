import { Component, OnInit } from '@angular/core';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective, RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeService.selectedRecipe?.ingredients!
    );
  }
  constructor(
    public recipeService: RecipeService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.recipeService.setSelectedRecipe(params['id']);
    });
  }
}
