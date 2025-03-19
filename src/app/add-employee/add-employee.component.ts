import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  // This will simulate adding the employee to the list (you can replace this with actual backend logic)
  addEmployee() {
    if (this.firstName && this.lastName && this.email) {
      // You can replace the following with logic to save the employee (e.g., in a database or local storage)
      alert(`Employee Added: ${this.firstName} ${this.lastName} (${this.email})`);
      // After adding the employee, navigate back to the employee list
      this.router.navigate(['/employee-list']);
    } else {
      alert('Please fill in all fields.');
    }
  }

  constructor(private router: Router) {}
}
