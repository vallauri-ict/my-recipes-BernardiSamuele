import { Component } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeModel } from '../models/recipe.model';
import { RecipeService } from './recipe.service';
import { RecipeEmptyComponent } from './recipe-empty/recipe-empty.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeListComponent, RouterOutlet],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  constructor(public recipeService: RecipeService) {}
}
