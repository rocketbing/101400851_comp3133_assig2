import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees = [
    { firstName: 'Pritesh', lastName: 'Patel', email: 'pj@p.com' },
    { firstName: 'Moksh', lastName: 'Patel', email: 'mp@com' },
    { firstName: 'Brad', lastName: 'Gibson', email: 'bg@com' },
    { firstName: 'Caitrose', lastName: 'Lecomte', email: 'cl@com' }
  ];
}
