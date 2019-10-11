import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddMisionGeneralComponent } from '../add-mision-general/add-mision-general.component';
import { AddMisionArticlesComponent } from '../add-mision-articles/add-mision-articles.component';

@Component({
  selector: 'app-add-mision',
  templateUrl: './add-mision.component.html',
  styleUrls: ['./add-mision.component.scss']
})
export class AddMisionComponent implements OnInit  {
  @ViewChild("general",{static:true}) general:AddMisionGeneralComponent;
  @ViewChild("articles",{static:true}) articles:AddMisionArticlesComponent
  missionAssigned;


  constructor(private router:Router) { }
  ngOnInit() {
  }

  add(){
    this.missionAssigned=this.general.captionDataMision();
    console.log(this.missionAssigned)
  }


}
