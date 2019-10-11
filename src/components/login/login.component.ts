import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DataBaseService } from 'src/services/data-base.service';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';



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
    private dbSrv:DataBaseService,
    private authsrv:AuthService,
    public snackBar:MatSnackBar,
    private router: Router
    ) { }

  ngOnInit() {
  }

 logIn(){
   console.log(this.loginForm.value.email,this.loginForm.value.password);
   this.isLoading=true;
   this.authsrv.logInEmailAndPassword(
     this.loginForm.value.email,
     this.loginForm.value.password
     ).then((response)=>{
       console.log(response)
      this.dbSrv.get({
        id: response.user.uid,
        collection: 'users'
      }).then(user=>{
        console.log(user)
        this.router.navigate(['board']);
      })
   }).catch(error=>{
     console.log(error)
     if(error.code === 'auth/wrong-password'){
      this.snackBar.open('Contraseña inválida', 'Cerrar', {duration: 2000});
     }else if(error.code === "auth/user-not-found"){
       this.snackBar.open('Datos invalidos', 'Cerrar', {duration: 2000});
     }
   })
  }

}
