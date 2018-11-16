import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  IngredientChange = new EventEmitter<Ingredient[]>();
  ingredients:Ingredient[]=[
  new Ingredient('Apples',23),
  new Ingredient('tomato',10),
];
constructor() { }

getIngredients(){
  return this.ingredients.slice();
}

addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient);
  this.IngredientChange.emit(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){
  this.ingredients.push(...ingredients);
  this.IngredientChange.emit(this.ingredients.slice());
}

}
