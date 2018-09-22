import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe :Recipe ;
  constructor(private recipeService : RecipeService) { 

   }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
       ( recipe : Recipe ) => {
         this.selectedRecipe = recipe
       }
    );

  }

}

// ES6 syntax : 

// ( recipe : Recipe ) => {
//   this.selectedRecipe = recipe
// }

// ( recipe : Recipe ) is argument and 

// {
//   this.selectedRecipe = recipe
// }      is the function

