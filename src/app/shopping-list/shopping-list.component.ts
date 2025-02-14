import { Component } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { IngredientModel } from '../models/ingredient.model';
import { HighlightDirective } from '../shared/highlight.directive';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent, HighlightDirective],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  constructor(public shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingListService.getIngredients();
  }
}
