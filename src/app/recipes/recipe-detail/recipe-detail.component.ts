import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { NgFor } from '@angular/common';
import { DropdownDirective } from '../../shared/dropdown.directive';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() recipe!: RecipeModel;
}
