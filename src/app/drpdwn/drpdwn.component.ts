import { Component, OnInit, HostLisner, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drpdwn',
  templateUrl: './drpdwn.component.html',
  styleUrls: ['./drpdwn.component.css'],
  host:{
  "(document:click)":"outClick($event)"
}
})
export class DrpdwnComponent implements OnInit {
public toggleSelect: boolean;
public selectedItem: any;
public dataList: any;

@Input() data: any;
@Output() selected:EventEmitter<any> = new EventEmitter();	
  constructor() { 
 this.toggleSelect:false
}

  ngOnInit() {
  this.dataList = this.data;
  this.selected.emit(this.data[0])

  if(this.default) {
      this.selectedItem = this.default[0]
    } else {
      this.selectedItem = this.data[0]
    }
  }

  private outClick($event:Event):void {
    let classList = $event.target['classList'][0];
    if(classList !== 'select-button' && classList !== 'caret' ) {
      this.toggleSelect = false;
    }
  };

public toggleSelectBox($event:any):void {
    this.toggleSelect = !this.toggleSelect;
  };

selectedValue(value){
this.selectedItem = this.value;
this.toggleSelect: false;
this.selected.emit(value);
}
}
