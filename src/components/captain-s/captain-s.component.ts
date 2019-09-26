import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AddCaptainComponent } from '../add-captain/add-captain.component';

@Component({
  selector: 'app-captain-s',
  templateUrl: './captain-s.component.html',
  styleUrls: ['./captain-s.component.scss']
})
export class CaptainSComponent implements OnInit {
  captains=[{}];
  captainDataSource= new MatTableDataSource(this.captains);
  displayedColumns=['id','name','branch','misions']

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  newCaptain(){
    this.matDialog.open(AddCaptainComponent,{
      width:"40%"
    });
  }

}
