import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IngredientModel } from '../../models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  ingredientName: string = '';
  ingredientAmount: number = 0;
  @ViewChild('name') _name!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onClear() {
    this.ingredientName = '';
    this.ingredientAmount = 0;
  }

  onAddIngredient() {
    if (this.ingredientAmount === 0) {
      alert('Amount must be different than 0');
      return;
    }
    const newIngredient: IngredientModel = new IngredientModel(
      this.ingredientName,
      this.ingredientAmount
    );
    this.shoppingListService.addIngredient(newIngredient);
    this.onClear();
    this._name.nativeElement.focus();
  }
}
