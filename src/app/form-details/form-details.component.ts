import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
name:any
address:any
dateob:any
phone:any
role:any
gender:any
  constructor() { }

  ngOnInit(): void {
    this.name= localStorage.getItem('name')
    this.address=localStorage.getItem('address')
    this.dateob= localStorage.getItem('dateob')
    this.phone = localStorage.getItem('phone')
    this.role = localStorage.getItem('role')


console.log(this.name);


  }

}
