import { Component, OnInit, ElementRef , ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  @ViewChild('f') slForm : NgForm ;
  subscription : Subscription ;
  editMode = false ;
  editItemIndex : number ;
  editedItem : Ingredient ;
  
  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
    this.subscription =  this.slService.starEditing  
      .subscribe(
         (index : number) => {
           this.editMode = true ;
           this.editItemIndex = index ;
           this.editedItem = this.slService.getIngredients(index);
           this.slForm.setValue(
             {
               name : this.editedItem.name,
               amount : this.editedItem.amount
             }
           )
         }

      );
     }

  onSubmit(form : NgForm){

    const newIngredient = new Ingredient(form.value.name , form.value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editItemIndex , newIngredient)
    }else
    {
      this.slService.addIngredient( newIngredient );
    }
   this.editMode =false ;
   form.reset();
    
  }

  ngOnDestroy(){
     this.subscription.unsubscribe();
  }

}
