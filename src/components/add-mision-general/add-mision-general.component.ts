import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-mision-general',
  templateUrl: './add-mision-general.component.html',
  styleUrls: ['./add-mision-general.component.scss']
})
export class AddMisionGeneralComponent implements OnInit {
  
  mission;


  idFormContrl = new FormControl('',[
    Validators.required
  ]);
  date_startFormContrl = new FormControl('',[
    Validators.required
  ]);
  date_endFormContrl = new FormControl('',[
    Validators.required
  ]);
  competitorFormContrl = new FormControl('',[
    Validators.required
  ]);
  captainFormContrl = new FormControl('',[
    Validators.required
  ]);
  missionForm = new FormGroup({
    id:this.idFormContrl,
    date_start:this.date_startFormContrl,
    date_end:this.date_endFormContrl,
    competitor:this.competitorFormContrl,
    captain:this.captainFormContrl
  });
  id = new FormControl('', [
    Validators.required
  ]);



 /*  articles=[
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
    {name:"lapiz",picture:"../../assets/img/lapiz.jpg"},
  ] */
  constructor() { }

  ngOnInit() {
   
  }

  captionDataMision(){
    this.mission={
      id:this.missionForm.value.id,
      date_start:this.missionForm.value.date_start,
      date_end:this.missionForm.value.date_end,
      competitor:this.missionForm.value.competitor,
      captain:this.missionForm.value.captain,
      articles:this.articles,
      status:0,
      progression:0

    }
    console.log(this.mission) 
    return this.mission;
  }

  delete(item:any){
    console.log(item)
    if(this.articles.length){
      let index = this.articles.indexOf(item);
      if(index > -1){
        this.articles.splice(index,1);
        console.log(this.articles)
        return this.articles;
      } 
    }
  }

}
