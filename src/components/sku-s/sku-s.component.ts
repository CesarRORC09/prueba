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

  skus = [
    {sku:32132130,name:"Tijeras",class:"office",subclass:"writing"}
  ];
  skusDataSource = new MatTableDataSource(this.skus);
  displayedColumns = ['sku','name','class','subclass','options']
  constructor(private matDialog:MatDialog) { }

  ngOnInit() {
  }

  newSku(){
    this.matDialog.open(AddSkauComponent,{
      width:"60%"
    });
  }



}
