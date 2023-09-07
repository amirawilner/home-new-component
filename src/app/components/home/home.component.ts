import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent { 
    
    onRegisterClick() {
        console.log("Register button clicked!");
    }

    onLoginClick() {
        console.log("Login button clicked!");
    }
}



