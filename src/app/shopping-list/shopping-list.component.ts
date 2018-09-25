import { Component, OnInit , OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {
  private subscription : Subscription ;
  ingredients: Ingredient[];
  onIngredientAdded(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }

  constructor(private slService : ShoppingListService) {
     this.ingredients = this.slService.getIngredient();
     this.subscription =   this.slService.ingredientsChanged
     .subscribe(
       (ingredients : Ingredient[]) => 
       {
         this.ingredients =ingredients ;
       }
     );

   }

  ngOnInit() {
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

}
