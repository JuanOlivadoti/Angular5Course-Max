import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Output() recipeSelected = new EventEmitter<void>();
  @Input() recipe: Recipe;// Bindea recipe del componente a la declaración del padre.
  @Input() index: number;

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onSelected() {
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
