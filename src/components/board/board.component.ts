import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

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
  displayedColumns = ['id','date_start','date_end','competitor','status','progression','captain']
  constructor() { }

  ngOnInit() {
  }

}
