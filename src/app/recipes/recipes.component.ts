import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  
})
export class RecipesComponent implements OnInit {
  
  constructor(private recipeService : RecipeService) { 

   }

  ngOnInit() {
    
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

