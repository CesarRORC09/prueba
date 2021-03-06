import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/components/login/login.component';
import { HomeComponent } from 'src/components/home/home.component';
import { SidenavComponent } from 'src/components/sidenav/sidenav.component';


const routes: Routes = [
 //{ path:'',redirectTo: 'login', pathMatch: 'full'},
 { path: 'login',  component:LoginComponent},
 { path: 'tablero' , component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
