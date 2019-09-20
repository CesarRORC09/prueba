import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-mision',
  templateUrl: './add-mision.component.html',
  styleUrls: ['./add-mision.component.scss']
})
export class AddMisionComponent implements OnInit {

  seleccion=false;
  subclase;
  constructor() { }

  ngOnInit() {
  }
  seleccionStatus(){
    this.seleccion=true;
    console.log(this.seleccion,this.subclase)
  }


}
