import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

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
    {name:"Capitanes",route:"captains"},
    {name:"Competidores",route:"competitors"},
    {name:"Sku's",route:"skus"},
    {name:"Cerrar sesion",route:"/login"}
  ];

  private _mobileQueryListener: () => void;

  constructor(private router:Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



  shouldRun =true;

  ngOnInit() {
    this.valueIcon=true
  }

  logOut(){
    this.router.navigate(['/login'])
  }
  goHome(){
    this.router.navigate(['/board/home']);
  }

  changeIcon(){
    if(this.valueIcon)
      this.valueIcon=false
    else
      this.valueIcon=true
  }

}
