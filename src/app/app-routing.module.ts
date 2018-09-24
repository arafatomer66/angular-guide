import {   NgModule   } from '@angular/core' ;
import { RouterModule , Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ServicesComponent } from './services/services.component';
import { DirectiveComponent } from './directive/directive.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
 

const appRoutes : Routes = [
    { path : '' , redirectTo : '/recipes' , pathMatch : 'full' } ,
    { path : 'recipes' , component : RecipesComponent , children : [
       { path : '' , component : RecipeStartComponent , children:[
           { path : ':id' , component : RecipeDetailComponent }
       ] }
    ]} ,
    { path : 'shopping-list' , component : ShoppingListComponent},
    { path : 'services' , component : ServicesComponent} ,
    { path : 'directive' , component : DirectiveComponent} 
]
@NgModule({
    imports : [RouterModule.forRoot(appRoutes) ],
    exports :  [RouterModule]
}) 

export class AppRoutingModule {

}

// No spaces should be there in path :

// :id dynamic 
