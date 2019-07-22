import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../shared/recipe.model';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(params['id']);
      }
    );
  }

}
