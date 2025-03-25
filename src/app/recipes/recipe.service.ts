import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeModel } from '../models/recipe.model';
import { IngredientModel } from '../models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { LoadingService } from '../shared/loading.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: RecipeModel[] = [];
  selectedRecipe?: RecipeModel;
  firstScan = true;

  constructor(
    private dataStorageService: DataStorageService,
    private shoppingListService: ShoppingListService,
    private loadingService: LoadingService
  ) {}

  public getRecipes() {
    this.dataStorageService.inviaRichiesta('GET', '/recipes')?.subscribe({
      next: (data: any) => {
        this.recipes = data;
        if (this.firstScan) {
          this.selectedRecipe = this.recipes[0];
          this.shoppingListService.getIngredients();
          this.firstScan = false;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  setSelectedRecipe(id: string) {
    this.dataStorageService.inviaRichiesta('GET', `/recipes/${id}`)?.subscribe({
      next: (data: any) => {
        this.selectedRecipe = data;
      },
    });
  }
}
