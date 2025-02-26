import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { IngredientModel } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: IngredientModel[] = [];
  remaining = 0;
  ingredientAdded: Subject<string> = new Subject<string>();

  constructor(private dataStorageService: DataStorageService) {}

  getIngredients() {
    this.dataStorageService.inviaRichiesta('GET', '/shoppingList')?.subscribe({
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
      ingredientFound.amount += newIngredient.amount;
      if (ingredientFound.amount < 0) {
        ingredientFound.amount = 0;
      }
      this.patchIngredient(ingredientFound._id, {
        amount: ingredientFound.amount,
      });
    } else {
      // this.ingredients.push(newIngredient);
      this.postIngredient(newIngredient);
    }
  }
  patchIngredient(id: string | undefined, ingredientAmount: Object) {
    this.dataStorageService
      .inviaRichiesta('PATCH', '/shoppingList/' + id, ingredientAmount)
      ?.subscribe({
        next: (data) => {
          this.remaining--;
          this.getIngredients();
          // alert('Ingrediente correttamente modificato');
          if (this.ingredientAdded.observed) {
            this.ingredientAdded.next('Ingrediente correttamente modificato');
          } else if (this.remaining == 0) {
            alert('Success');
          }
        },
      });
  }

  postIngredient(newIngredient: IngredientModel) {
    this.dataStorageService
      .inviaRichiesta('POST', '/shoppingList', newIngredient)
      ?.subscribe({
        next: () => {
          this.remaining--;
          this.getIngredients();
          // alert('Ingrediente correttamente aggiunto');
          if (this.ingredientAdded.observed) {
            this.ingredientAdded.next('Ingrediente correttamente aggiunto');
          } else if (this.remaining == 0) {
            alert('Success');
          }
        },
      });
  }

  addIngredients(newIngredients: IngredientModel[]) {
    this.remaining = newIngredients.length;
    for (const ingredient of newIngredients) {
      this.addIngredient(ingredient);
    }
  }

  deleteIngredient(id: string) {
    this.dataStorageService
      .inviaRichiesta('DELETE', '/shoppingList/' + id)
      ?.subscribe({
        next: () => {
          this.getIngredients();
          alert('Ingredient successfully deleted');
        },
      });
  }
}
