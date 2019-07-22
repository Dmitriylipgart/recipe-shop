import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../shared/recipe.model';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeIndex: number;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(params['id']);
        this.recipeIndex = +params['id'];
      }
    );
  }

}
