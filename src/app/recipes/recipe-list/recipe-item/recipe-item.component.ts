import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../../models/recipe.model';
import { HighlightDirective } from '../../../shared/highlight.directive';
import { RecipeService } from '../../recipe.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [HighlightDirective, RouterLink],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe!: RecipeModel;
  constructor(public recipeService: RecipeService) {}
}
