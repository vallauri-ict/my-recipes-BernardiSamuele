import { Component } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeModel } from '../models/recipe.model';
import { RecipeService } from './recipe.service';
import { RecipeEmptyComponent } from './recipe-empty/recipe-empty.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeListComponent, RecipeDetailComponent, RecipeEmptyComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  constructor(public recipeService: RecipeService) {}
}
