import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServicesService } from '../services/services.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // exform:any= FormGroup;
  exform=this.fb.group({
  
    name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  address:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  dateob:[''],
  phone:['',[ Validators.required,
    Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]],
role:[''],
    // pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    // uname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  })


  constructor(private fb:FormBuilder,private route:Router) {
   }

  ngOnInit(): void { 
    }
  

    onSubmit(){
      var name:any=this.exform.value.name
      var address:any=this.exform.value.address
      var dateob:any=this.exform.value.dateob
      var phone:any=this.exform.value.phone
      var role:any=this.exform.value.role


      if(this.exform.valid){
        // this.route.navigateByUrl('dashboard')
        
console.log(address);
localStorage.setItem('name',name)
localStorage.setItem('address',address)
localStorage.setItem('dateob',dateob)
localStorage.setItem('phone',phone)
localStorage.setItem('role',role)


      alert('submited')
      this.route.navigateByUrl('emp-details')

  
}}  }