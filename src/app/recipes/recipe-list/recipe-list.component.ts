import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Recipe} from '../../shared/recipe.model';
import {RecipeService} from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipeSelectedList = false;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeSelected.subscribe(
      (isSelected: boolean) => {
        this.recipeSelectedList = isSelected;
      }
    );
  }
}
