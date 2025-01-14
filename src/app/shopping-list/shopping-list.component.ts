import { Component } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { IngredientModel } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: IngredientModel[] = [
    new IngredientModel('apple', 5),
    new IngredientModel('tomato', 10),
    new IngredientModel('pineapple', 1),
    new IngredientModel('cookies', 15),
  ];

  onIngredientAdded(ingredient: IngredientModel) {
    const ingredientFound = this.ingredients.find(i => i.name === ingredient.name);
    if(ingredientFound) {
      ingredientFound.amount += ingredient.amount;
      if(ingredientFound.amount < 0) {
        ingredientFound.amount = 0;
      }
    }
    else {
      this.ingredients.push(ingredient);
    }
  }
}
