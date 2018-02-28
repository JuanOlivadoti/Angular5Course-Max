// import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    // inform the component that new data is available
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();

    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    };

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    };

    addIngredients(ingredients: Ingredient[]) {
        // Se podría hacer lo siguiente aunque lanzaría demasiados eventos
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients); //spread operator
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}