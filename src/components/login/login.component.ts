import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DataBaseService } from 'src/services/data-base.service';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;

  emailFormControl = new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('',[
    Validators.required
  ]);

  loginForm = new FormGroup({
    email:this.emailFormControl,
    password:this.passwordFormControl
  });

  constructor(
    private _dbsrv:DataBaseService,
    private authsrv:AuthService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

 logIn(){
   console.log(this.loginForm.value.email,this.loginForm.value.password);
   this.isLoading=true;
   this.authsrv.login(
     this.loginForm.value.email,
     this.loginForm.value.password
     ).then((response)=>{
     if(response==true){
       this._router.navigate(['/tablero']);
     }
     else{
       alert("error de log")
     }
   })
  }

}
