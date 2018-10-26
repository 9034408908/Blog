import { Component, OnInit, HostListener, Output, Input, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-drpdwn',
  templateUrl: './drpdwn.component.html',
  styleUrls: ['./drpdwn.component.css'],
  host:{
  "(document:click)":"outClick($event)"
}
})
export class DrpdwnComponent implements OnInit {
  public toggleSelect:boolean;
  public selectLable:string;
  public selectedItem:any;
  public dataList:any;
  public shortNameEnable:boolean;

  @Input() label:string;
  @Input() data:any;
  @Input() selectedData:any;
  @Input() shortName:boolean;
  @Input() default:any;
  @Output() selected:EventEmitter<any> = new EventEmitter();


  constructor(private el:ElementRef) {
    this.toggleSelect = false;
    
}

  ngOnInit() {
    this.selectLable = this.label;
    this.dataList = this.data;
    this.shortNameEnable = this.shortName;
    // this.selected.emit(this.data[0])

    if(this.default) {
      this.selectedItem = this.default[0]
    } else {
      this.selectedItem = this.data[0]
    }
  }


  private outClick($event:Event):void {
    let classList = $event.target['classList'][0];
    if(classList !== 'select-button' && classList !== 'text' && classList !== 'label' && classList !== 'caret' ) {
      this.toggleSelect = false;
    }
  };

  public toggleSelectBox($event:any):void {
    this.toggleSelect = !this.toggleSelect;
  };

  public selectedValue(value) {
    this.selectedItem = value;
    this.toggleSelect = false;
    this.selected.emit(value);
  }

  public upperCase(value) {
    return value.toUpperCase()
  }
}
