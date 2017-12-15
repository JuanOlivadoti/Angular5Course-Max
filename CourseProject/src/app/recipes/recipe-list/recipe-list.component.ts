import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Chicken-Menu-Recipe-Bacon-Dinner-Meat-Dish-2428926.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Chicken-Menu-Recipe-Bacon-Dinner-Meat-Dish-2428926.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
