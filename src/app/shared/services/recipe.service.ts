import {Recipe} from '../recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../ingredient.model';
import {Observable, of} from 'rxjs';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super tasty schnitzel',
      'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/authentic-wiener-schnitzel-recipe-2016858.jpg',
      [new Ingredient('Meat', 200), new Ingredient('French Fries', 50)]
    ),
    new Recipe('Big Fat Burger',
      'Very big and tasty burger',
      'https://tiktak-delivery.ru/img/dish/DBgF3DrdIZmNMYGK.jpg?h=256&fit=max&mark=%2Fhome%2Ftiktak%2Fhtdocs%2Fpublic%2Fassets%2Findex%2Fimages%2Fwater-mark-2.png&s=bb41bef332adcfad57a859deeac3f35a',
    [new Ingredient('hamburger bun', 50), new Ingredient('ground lean beaf', 100), new Ingredient('ketchup', 10)]),

    new Recipe('Spaghetti Bolognese',
      'Traditional italian pasta',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/09/spaghetti-bolognese.jpg?itok=KzT6QRKe',
      [new Ingredient('spaghetti', 200), new Ingredient('beef mince', 400)]
      ),
    new Recipe('Big Fat Burger',
      'Very big and tasty burger',
      'https://tiktak-delivery.ru/img/dish/DBgF3DrdIZmNMYGK.jpg?h=256&fit=max&mark=%2Fhome%2Ftiktak%2Fhtdocs%2Fpublic%2Fassets%2Findex%2Fimages%2Fwater-mark-2.png&s=bb41bef332adcfad57a859deeac3f35a',

  [new Ingredient('hamburger bun', 50), new Ingredient('ground lean beaf', 100), new Ingredient('ketchup', 10)])
];
  recipeSelected = new EventEmitter<boolean>();

  // isSelected: Observable<boolean> = of(false);

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  // setSelected(isSelected: boolean) {
  //   this.isSelected = of(isSelected);
  // }
}

