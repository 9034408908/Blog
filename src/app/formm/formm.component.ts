import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formm',
  templateUrl: './formm.component.html',
  styleUrls: ['./formm.component.css']
})
export class FormmComponent implements OnInit {
private myForm: FormGroup;
public email:any;
public password: any;
  constructor( private fBuilder : FormBuilder, private router : Router ) { }

  ngOnInit() {
  this.myForm= this.fBuilder.group({
  email:['',[Validators.required,Validators.minLength(5)]]
})
  }

  onSubmit(){
  	this.router.navigate(["/emp/product"]);

  }

}
