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
  @ViewChild("general",{static:true}) general:AddMisionGeneralComponent;
  @ViewChild("articles",{static:true}) articles:AddMisionArticlesComponent
  missionAssigned;
  articlesLoaded=this.articles.canasta;


  constructor(private router:Router,
              private dbSrv:DataBaseService) { }
  ngOnInit() {
    //this.loadArticles();
    
  }

  add(){
    this.missionAssigned=this.general.captionDataMision();
    console.log(this.missionAssigned)
    
    console.log(this.articles.canasta);
  }

  loadArticles(){
   let article={
    collection:"catalog",
    id:"articles"
   }
    this.dbSrv.get(article).then((res,err)=>{
      console.log(res,err)
      this.articlesLoaded=res.data;
      console.log(this.articlesLoaded)
    });
  }


}
