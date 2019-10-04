import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AddSkauComponent } from '../add-sku/add-skau.component';

@Component({
  selector: 'app-sku-s',
  templateUrl: './sku-s.component.html',
  styleUrls: ['./sku-s.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class SkuSComponent implements OnInit {
  buttonActivator:boolean ;
  skus = [
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"},
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"},
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"},
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"},
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"},
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"},
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"},
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"},
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"},
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"},
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"},
  ];
  dataSource = new MatTableDataSource(this.skus)
  columnsToDisplay =  ['sku','name','class','subclass','options'];
  expandedElement: PeriodicElement | null;

  constructor() { }

  ngOnInit() {
    this.buttonActivator=false;
  }

  mouseEnter(){
    this.buttonActivator=true
    console.log(this.buttonActivator)
  }

  mouseLeave(){
    this.buttonActivator=false
    console.log(this.buttonActivator)
  }

  deleteRow(item){
    if(this.skus.length){
      let index = this.skus.indexOf(item);
      if(index > -1){
        this.skus.splice(index,1);
        this.dataSource.data=this.skus;
      } 
    }
  }

}
export interface PeriodicElement {
  sku: string;
  name: number;
  class: number;
  subclass: string;
}


