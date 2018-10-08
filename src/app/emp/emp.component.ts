import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActorService } from '../actor.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
 public id: any;
 public btn_stt:boolean=true;
 public emp: any={};
 public emps:Array<any>;

  constructor( private router: Router, private service: ActorService, private activeRoute: ActivatedRoute ) { 
  this.emps=[];
this.id=this.activeRoute.snapshot.params.id;
}

  ngOnInit() {
  this.btn_stt=false;
 this.service.get().subscribe((add)=>{
  var keys=Object.keys(add);
  this.emps=keys.map((id)=>{
  return{id:id, add:add[id]}
})
 console.log(this.emps)
if(this.id!== "product"){
for(let i=0; i < this.emps.length; i++) {
if(this.id == this.emps[i].id){
  this.emp = this.emps[i].add
}
}
}

}
 )
  }
public submit(){	
	this.router.navigate(["/details"]);
	this.service.create(this.emp).subscribe(
(add)=>{
	console.log(this.emp);
}
	)
}

public update (){
  this.router.navigate([`/details/update`])
  this.btn_stt= true;
  this.service.update(this.id,this.emp).subscribe((add)=>{
  console.log(add)
}

  )

}


}

