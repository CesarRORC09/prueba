import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { trigger, style, state, animate, transition } from '@angular/animations';
import { DataBaseService } from 'src/services/data-base.service';

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
  missions=[];
/* 
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
  ]; */
  buttonActivator:boolean;
 
  dataSource = new MatTableDataSource(this.missions);
  columnsToDisplay =  ['id','date_start','date_end','competitor','status','progression','captain','options'];

  constructor( private _router:Router,
                private dbSrv:DataBaseService) { }

  ngOnInit() {
    this.buttonActivator = false;
    this.loadMisions();
    console.log(this.missions);
    console.log(this.dataSource)
  }

  mouseEnter(){
    this.buttonActivator=true;
  }

  mouseLeave(){
    this.buttonActivator=false;
  }

  toActive(item){
    let itemToUpdate = {
      id:item.id,
      data:{
        status:1
      },
      collection:'missions'
    }
    this.dbSrv.update(itemToUpdate).then(()=>{
      console.log('actualizado')
      this.loadMisions();
      console.log(this.missions)
    })
  }

  toBlock(item){
    let itemToUpdate = {
      id:item.id,
      data:{
        status:0
      },
      collection:'missions'
    }
    this.dbSrv.update(itemToUpdate).then(()=>{
      console.log('actualizado')
      this.loadMisions();
      console.log(this.missions)
    })
  }
  deleteRow(item){
    console.log(item);
    let itemToDelete = {
      id:item.id,
      collection:'missions'
    }
    if(this.missions.length){
        this.dbSrv.remove(itemToDelete).then(res=>{
          this.loadMisions();
          console.log(this.missions)
        })
    }
  }

  newMision(){
    this._router.navigate(['board/new-mission']);
  }

  loadMisions(){
    this.missions=[];
    this.dbSrv.getAll('missions').then((res)=>{
      console.log(res);
      let mission;
      res.forEach(element => {
        mission = {
          id:element.id,
          date_start:this.getFecha(element.data.date_start.seconds),
          date_end:this.getFecha(element.data.date_end.seconds),
          competitor:element.data.competitor,
          status:element.data.status,
          progression:element.data.progression,
          captain:element.data.captain,
          articles:element.data.articles
        };
        this.missions.push(mission);
      });
    })
    this.dataSource.data=this.missions;
  }

  getFecha(segundos){
    console.log(segundos)
    let fechaSeconds = new Date(segundos * 1000);
    let fecha = fechaSeconds.getUTCDate()+'-'+fechaSeconds.getUTCMonth()+'-'+fechaSeconds.getUTCFullYear()
    return fecha;
  }

  

}

