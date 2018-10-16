import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = [];
  constructor(private getData: GetDataService){}
  ngOnInit(){
    this.getData.get_employees().subscribe(res => this.employees = res,
    err => console.error(err),
    () => console.log(this.employees));
  }
}
