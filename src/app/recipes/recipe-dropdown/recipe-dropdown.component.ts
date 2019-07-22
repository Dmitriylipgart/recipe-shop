import {Component, Input, OnInit} from '@angular/core';
import {ShoppingListService} from '../../shared/services/shopping-list.service';
import {Recipe} from '../../shared/recipe.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-dropdown',
  templateUrl: './recipe-dropdown.component.html',
  styleUrls: ['./recipe-dropdown.component.css']
})
export class RecipeDropdownComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeIndex: number;

  constructor(private router: Router, private shoppingListService: ShoppingListService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
   this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
      this.router.navigateByUrl(`/recipes/${this.recipeIndex}/edit`);
  }
}
