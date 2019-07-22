import {Ingredient} from '../ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 3)
  ];

  ingredientsChanged = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients);
  }

}
