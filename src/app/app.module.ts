import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BindComponent } from './bind/bind.component';
import { BindElementComponent } from './bind-element/bind-element.component';
import { DirectiveComponent } from './directive/directive.component';
import { UnlessDirective } from './unless.directive';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highligh/better-highlight.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { Routes ,RouterModule  } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ObservableComponent } from './observable/observable.component';
import { HomeComponent } from './observable/home/home.component';
import { UserComponent } from './observable/user/user.component';
import { UserService } from './observable/user.service';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    BindComponent,
    BindElementComponent,
    DirectiveComponent,
    UnlessDirective,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ObservableComponent,
    HomeComponent,
    UserComponent,
    FormsComponent,
    ReactiveFormComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [AccountsService , LoggingService ,RecipeService , ShoppingListService , UserService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }