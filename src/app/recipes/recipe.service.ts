import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeModel } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: RecipeModel[] = [];
  selectedRecipe?: RecipeModel;
  firstScan = true;

  constructor(private dataStorageService: DataStorageService) {}

  public getRecipes() {
    this.dataStorageService.inviaRichiesta('GET', '/recipes')?.subscribe({
      next: (data: any) => {
        this.recipes = data;
        if (this.firstScan) {
          this.selectedRecipe = this.recipes[0];
          this.firstScan = false;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
