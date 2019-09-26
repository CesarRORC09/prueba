import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/components/login/login.component';
import { HomeComponent } from 'src/components/home/home.component';
import { SidenavComponent } from 'src/components/sidenav/sidenav.component';
import { AddMisionComponent } from 'src/components/add-mision/add-mision.component';
import { CaptainSComponent } from 'src/components/captain-s/captain-s.component';
import { CompetitorsComponent } from 'src/components/competitors/competitors.component';
import { SkuSComponent } from 'src/components/sku-s/sku-s.component';
import { MainComponent } from 'src/components/main/main.component';


const routes: Routes = [
 { path:'',component:MainComponent},
 { path:'',redirectTo: 'login', pathMatch: 'full'},
 { path: 'login',  component:LoginComponent},
 { path:'board', component:SidenavComponent,
  children:[
    { path: '', redirectTo:'home', pathMatch: 'full'},
    { path: 'home' , component:HomeComponent},
    {path:'new-mission',component:AddMisionComponent},
    { path: 'captains' , component:CaptainSComponent},
    { path: 'competitors', component:CompetitorsComponent},
    { path: 'skus', component:SkuSComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
