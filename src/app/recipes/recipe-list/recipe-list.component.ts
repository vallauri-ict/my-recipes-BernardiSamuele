import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeModel } from '../../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeItemSelected = new EventEmitter<RecipeModel>();
  constructor(public recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes();
  }
}
