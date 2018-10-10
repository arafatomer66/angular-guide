import {   NgModule   } from '@angular/core' ;
import { RouterModule , Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ServicesComponent } from './services/services.component';
import { DirectiveComponent } from './directive/directive.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ObservableComponent } from './observable/observable.component';
import { HomeComponent } from './observable/home/home.component';
import { UserComponent } from './observable/user/user.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { HttpComponent } from './http/http.component';
import { ApiComponent } from './api/api.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ApiCrudComponent } from './api-crud/api-crud.component';
 

const appRoutes : Routes = [
    { path : '' , redirectTo : '/recipes' , pathMatch : 'full' } ,
    { path : 'recipes' , component : RecipesComponent , children : [
       { path : '' , component : RecipeStartComponent  } ,
       { path : 'new' , component : RecipeEditComponent } ,
       { path : ':id' , component : RecipeDetailComponent },
       { path : ':id/edit' ,component : RecipeEditComponent  }
    ]} ,
        { path : 'signup' , component : SignupComponent},
        { path : 'apicrud' , component : ApiCrudComponent},
        { path : 'signin' , component : SigninComponent},
        { path : 'shopping-list' , component : ShoppingListComponent},
        { path : 'services' , component : ServicesComponent} ,
        { path : 'reactive' , component : ReactiveFormComponent} ,
        { path : 'directive' , component : DirectiveComponent},
        { path : 'http' , component : HttpComponent},
        { path : 'api' , component : ApiComponent},
        { path : 'pipe' , component : PipeComponent},
        { path : 'forms' , component : FormsComponent},
        { path : 'observable' , component : ObservableComponent , children : [
            { path : 'observables' , component:HomeComponent } ,
            { path : 'user/:id' , component : UserComponent  }
        ]  }
]
@NgModule({
    imports : [RouterModule.forRoot(appRoutes) ],
    exports :  [RouterModule]
}) 

export class AppRoutingModule {

}

// No spaces should be there in path :

// :id dynamic 

//Ordering the children path are most important 
