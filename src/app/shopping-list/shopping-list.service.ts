import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { IngredientModel } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: IngredientModel[] = [];

  constructor(private dataStorage: DataStorageService) {}

  getIngredients() {
    this.dataStorage.inviaRichiesta('GET', '/shoppingList')?.subscribe({
      next: (data) => {
        this.ingredients = data as IngredientModel[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addIngredient(newIngredient: IngredientModel) {
    const ingredientFound = this.ingredients.find(
      (i) => i.name === newIngredient.name
    );
    if (ingredientFound) {
      newIngredient.amount = ingredientFound.amount + newIngredient.amount;
      if (newIngredient.amount < 0) {
        newIngredient.amount = 0;
      }
      this.patchIngredient(ingredientFound._id, {
        amount: newIngredient.amount,
      });
    } else {
      // this.ingredients.push(newIngredient);
      this.postIngredient(newIngredient);
    }
  }
  patchIngredient(id: string | undefined, ingredientAmount: Object) {
    this.dataStorage
      .inviaRichiesta('PATCH', '/shoppingList/' + id, ingredientAmount)
      ?.subscribe({
        next: (data) => {
          this.getIngredients();
          alert('Ingrediente correttamente modificato');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  postIngredient(newIngredient: IngredientModel) {
    this.dataStorage
      .inviaRichiesta('POST', '/shoppingList', newIngredient)
      ?.subscribe({
        next: (data) => {
          this.getIngredients();
          alert('Ingrediente correttamente aggiunto');
        },
      });
  }

  addIngredients(newIngredients: IngredientModel[]) {
    for (const ingredient of newIngredients) {
      this.addIngredient(ingredient);
    }
  }
}
