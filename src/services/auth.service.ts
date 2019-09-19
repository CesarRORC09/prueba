import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(email:any,password:any){
    console.log(email,password)
    return new Promise((resolve, reject) => {
          if (email && password){
            resolve(true);
          } else {
              resolve(false);
          }
  });
  }
}
