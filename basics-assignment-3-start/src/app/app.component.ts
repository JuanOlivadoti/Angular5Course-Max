import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pToggler = false;
  // counter = 0;
  clickArray = [];

  onBtnClick() {
    // (this.counter % 2) ? this.pToggler = true : this.pToggler = false;
    this.pToggler = !this.pToggler;
    // this.counter++;
    this.clickArray.push(this.clickArray.length + 1);
  }

  // getBgColor() {
  //   console.log(this.clickArray.length);
  //   return this.
  // }
}
