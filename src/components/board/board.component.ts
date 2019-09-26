import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AddMisionComponent } from '../add-mision/add-mision.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  users=[
    {id:"132233.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'en proceso',progression:'20%',captain:'capitan 1'},
    {id:"132233.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'en proceso',progression:'20%',captain:'capitan 1'},
    {id:"132233.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'en proceso',progression:'20%',captain:'capitan 1'},
    {id:"132233.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'en proceso',progression:'20%',captain:'capitan 1'},
    
  
  ];
  userDataSource=new MatTableDataSource(this.users)
  displayedColumns = ['id','date_start','date_end','competitor','status','progression','captain','options']
  constructor(private matDialog: MatDialog,
              private router:Router) { }

  ngOnInit() {

  }

  newMission(){
    this.router.navigate(['board/new-mission']);
  }


}
