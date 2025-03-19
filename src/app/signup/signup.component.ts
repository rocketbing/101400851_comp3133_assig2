import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  
  constructor(private router: Router) {}

  signup() {
    alert('Account Created!');
    this.router.navigate(['/login']);
  }
}
