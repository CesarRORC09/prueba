import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-mision-general',
  templateUrl: './add-mision-general.component.html',
  styleUrls: ['./add-mision-general.component.scss']
})
export class AddMisionGeneralComponent implements OnInit {
@Input() canasta:any;
@Input() articles:any;
  mission;


  idFormContrl = new FormControl(this.getRandomInt().toString(),[
    Validators.required,
    
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


  constructor() { }

  ngOnInit() {
   this.canasta.length
  }

  captionDataMision(){
    
    if(this.missionForm.value.date_end<this.missionForm.value.date_start)
    {
      alert("Introduzca fechas validas por favor...");
    }else{
      this.clear();
      this.mission={
        id:this.missionForm.value.id,
        data:{
          date_start:this.missionForm.value.date_start,
          date_end:this.missionForm.value.date_end,
          competitor:this.missionForm.value.competitor,
          captain:this.missionForm.value.captain,
          articles:this.canasta,
          status:1,
          progression:0
        }
      }
      return this.mission;
    }
  }

  discapture(item:any){
    console.log(item.active)
    if(item.active==true){
      if(this.canasta.length>0){
        let indexCanasta = this.canasta.indexOf(item);
        let indexArticles = this.articles.indexOf(item);
        console.log('index',indexCanasta)
        console.log('index',indexArticles)
        if(indexCanasta > -1){
          this.articles[indexArticles].active=false;
          console.log('descapturado',this.articles[indexArticles])
          this.canasta.splice(indexCanasta,1);
         
        } 
      }
      console.log(this.canasta)
      return this.articles;
    }
 }

 clear(){
   this.canasta.forEach(element => {
     delete element.active;
     delete element.collection;
   });
 }

 getRandomInt() {
  return Math.floor(Math.random() * (99999999 - 10000000)) + 10000000;
}

}
