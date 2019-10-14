import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddMisionGeneralComponent } from '../add-mision-general/add-mision-general.component';
import { AddMisionArticlesComponent } from '../add-mision-articles/add-mision-articles.component';
import { DataBaseService } from 'src/services/data-base.service';

@Component({
  selector: 'app-add-mision',
  templateUrl: './add-mision.component.html',
  styleUrls: ['./add-mision.component.scss']
})
export class AddMisionComponent implements OnInit  {
  @ViewChild("general",{static:true}) missionGeneral:AddMisionGeneralComponent;
  @ViewChild("articles",{static:true}) missionArticles:AddMisionArticlesComponent
  categories;
  products;
  canasta=[];
  missionAssigned={
    id:0,
    data:'',
    collection:''
  };





  constructor(private router:Router,
              private dbSrv:DataBaseService) { }
  ngOnInit() {
    this.loadArticles();
  }

  add(){
   
    this.missionAssigned.id=this.missionGeneral.captionDataMision().id;
    this.missionAssigned.data=this.missionGeneral.captionDataMision().data;
    this.missionAssigned.collection='missions'
    console.log(this.missionAssigned);
    this.dbSrv.set(this.missionAssigned).then((res,err)=>{
      console.log(res);
      this.router.navigate(['/board'])
    })
  }

  loadArticles(){
    this.dbSrv.getAll('categories',
    {
     parent:
       {
        id:'esJTzFABbja6S5FF0NhX',
        collection:'companies'
      }
      
    }).then((res)=>{
      res.push('false');
     this.categories=JSON.stringify(res);
     console.log("Padre",this.categories)
   });

    this.dbSrv.getAll('catalog',
    {
    parent:
      {
        id:'esJTzFABbja6S5FF0NhX',
        collection:'companies'
      }
      
    }).then((res)=>{
    this.products=this.ordenar(res);
    console.log("Padre",this.products)
    this.products.forEach(element => {
      
      console.log(element.data.category)
    });
  });
   }


   ordenar(array){
    console.log("algo!",array)
     array.forEach(element => {
       element.active=false;
     });
     console.log("arreglo ordenado",array)
     return array;
  }


}
