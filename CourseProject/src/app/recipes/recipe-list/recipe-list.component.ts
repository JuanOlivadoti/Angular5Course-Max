import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Chicken-Menu-Recipe-Bacon-Dinner-Meat-Dish-2428926.jpg'),
    new Recipe('Anotheer Test Recipe', 'Another test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
