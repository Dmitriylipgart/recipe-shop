import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {LogInComponent} from './log-in/log-in.component';
import {ReactiveSignInComponent} from './reactive-sign-in/reactive-sign-in.component';

const  routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: 'new', component: RecipeEditComponent},
      {path: ':id/edit', component: RecipeEditComponent},
      {path: ':id/detail', component: RecipeDetailComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'sign-in', component: ReactiveSignInComponent},
  {path: 'log-in', component: LogInComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
exports: [RouterModule]
})
export class AppRouterModule {


}
