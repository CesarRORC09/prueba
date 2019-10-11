import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logInEmailAndPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  public onAuthStateChanged(cb) {
    return firebase.auth().onAuthStateChanged(cb);
  }

  public currentUser() {
    return firebase.auth().currentUser;
  }

  public logOut() {
    return firebase.auth().signOut();
  }

  public callFunction(functionName, data) {
    const functionToCall = firebase.functions().httpsCallable(functionName);
    return functionToCall(data);
  }

}
