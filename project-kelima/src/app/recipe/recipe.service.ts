import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  
  recipeSelected = new EventEmitter<Recipe>();

recipes:Recipe[]=[
  new Recipe('A Test Recipe','This is simply a test',
  'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
  [
    new Ingredient('meal',1),
    new Ingredient('tomato', 2)
  ]),
  new Recipe('A Test Recipe','This is simply a test','../src/app/img/icon.png',
  [
    new Ingredient('rice',1),
    new Ingredient('meal',3),
    new Ingredient('egg',1)
  ]),
];

getRecipes(){
return this.recipes.slice();
}

//method dan parameter ingredient[]
addIngredientsShoppingList(ingredients:Ingredient[]){
  this.slsService.addIngredients(ingredients);
}

getRecipe(index:number){
  return this.recipes[index];
}

constructor(private slsService: ShoppingListService) { }

}
