import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() recipe!: RecipeModel;
}
