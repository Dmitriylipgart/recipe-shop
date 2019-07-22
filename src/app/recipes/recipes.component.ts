import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeSelected = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (isSelected: boolean) => {
        this.recipeSelected = isSelected;
      }
    );
  }
}
