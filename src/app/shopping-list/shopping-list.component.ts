import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[];
  onIngredientAdded(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }

  constructor(private slService : ShoppingListService) {
     this.ingredients = this.slService.getIngredient();
     this.slService.ingredientsChanged
     .subscribe(
       (ingredients : Ingredient[]) => 
       {
         this.ingredients =ingredients ;
       }
     );

   }

  ngOnInit() {
  }

}
