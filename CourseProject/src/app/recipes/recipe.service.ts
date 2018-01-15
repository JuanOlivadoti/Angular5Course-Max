import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Bacon Roll',
            'Turkey roll with bacon',
            'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Chicken-Menu-Recipe-Bacon-Dinner-Meat-Dish-2428926.jpg',
            [
                new Ingredient('Turkey', 2),
                new Ingredient('bacon', 3)
            ]),
        new Recipe('Lemon Salmon',
            'Pink salmon with lemon juice',
            'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
            [
                new Ingredient('Salmon', 1),
                new Ingredient('lemon', 5)
            ])
    ];

    getRecipes() {
        return this.recipes.slice(); //devuelve una copia de la lista de recetas.
    }


}