import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddMisionComponent } from '../add-mision/add-mision.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router:Router,
              private _dialog:MatDialog) { }

  ngOnInit() {
  }

  logOut(){
    this._router.navigate(['/login']);
  }

  openAddMision(){
    this._dialog.open(AddMisionComponent,{
      width:'35%',
    });
  }

}
