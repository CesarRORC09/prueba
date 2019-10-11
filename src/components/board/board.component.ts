import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { trigger, style, state, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class BoardComponent implements OnInit {

  users=[
    {id:"132231.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'1',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132232.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'2',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132233.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'3',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132234.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'4',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132235.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'4',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132236.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'1',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132237.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'3',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132238.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'3',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132239.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'1',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132240.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'1',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132241.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'4',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132242.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'4',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},

    {id:"132243.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'3',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132244.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'2',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132245.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'2',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132246.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'2',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132247.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'2',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132248.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'1',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132249.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'4',progression:'20%',captain:'capitan 1',articles:['articulo1','articulo2','articulo3']},
    {id:"132250.com",date_start:"1/02/20",date_end:'2/02/20',competitor:'alguien',status:'2',progression:'20%',captain:'capitan 1',articles:{total:['articulo1','articulo2','articulo3'],capturados:['articulo1'],notFound:[]}}
  ];
  buttonActivator:boolean;
 
  dataSource = new MatTableDataSource(this.users)
  columnsToDisplay =  ['id','date_start','date_end','competitor','status','progression','captain','options'];
  expandedElement: MisionElement | null;

  constructor( private _router:Router) { }

  ngOnInit() {
    this.buttonActivator = false;
  }

  mouseEnter(){
    this.buttonActivator=true
  }

  mouseLeave(){
    this.buttonActivator=false  
  }

  deleteRow(item){
    if(this.users.length){
      let index = this.users.indexOf(item);
      if(index > -1){
        this.users.splice(index,1);
        this.dataSource.data=this.users;
      } 
    }
  }

  newMision(){
    this._router.navigate(['board/new-mission']);
  }

  

}
export interface MisionElement {
  id: string;
  date_start: number;
  date_end: number;
  competitor: string;
  status: string;
  progression: string;
  captain: string;
}
