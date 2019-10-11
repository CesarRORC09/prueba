import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  valueIcon:boolean;

  fillerNav = [
    {name:"Misiones",route:"home"},
    {name:"Productos",route:"skus"},
    {name:"Capitanes",route:"captains"},
    {name:"Empresas",route:"competitors"},
    {name:"Cerrar sesion",route:"/login",action:"logOut()"}
  ];

  private _mobileQueryListener: () => void;

  constructor(private authService:AuthService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



  ngOnInit() {
    this.valueIcon=true
  }

  logOut(){
    this.authService.logOut().then(()=>console.log("salio"));
  }

  changeIcon(){
    if(this.valueIcon)
      this.valueIcon=false
    else
      this.valueIcon=true
  }

}
