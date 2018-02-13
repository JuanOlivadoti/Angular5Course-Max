import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['basic', 'advanced', 'pro'];
  selectedSubscription = 'advanced';
  @ViewChild('signupForm') sgnForm: NgForm;
  onSubmit() {
    console.log(this.sgnForm.value);

  }
}
