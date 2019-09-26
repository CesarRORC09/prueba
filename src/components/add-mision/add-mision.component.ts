import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mision',
  templateUrl: './add-mision.component.html',
  styleUrls: ['./add-mision.component.scss']
})
export class AddMisionComponent implements OnInit {

  seleccion=false;
  subclase;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  seleccionStatus(){
    this.seleccion=true;
    console.log(this.seleccion,this.subclase)
  }

  cancel(){
    this.router.navigate(['/board/home']);
  }


}
