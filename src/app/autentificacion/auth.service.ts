import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
//Firebase auth para trabajar con autenticacion

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: Observable<any>;

  constructor(private auth: AngularFireAuth) {
    //almacenamos el estado del usuario, que inicia sesion
    this.user = this.auth.authState
    }

    //iniciamos sesion con email y contra
   login(username:string, password:string){

    return new Promise((resolve, rejects)=>{
      try{
        this.auth.signInWithEmailAndPassword(username, password);
        resolve("iniciaste sesion de forma correcta");
      } catch (error){
        rejects(error);
      }
    })
  }

  //cerramos sesion
  logOut (){
    this.auth.signOut();
  }

  currentUser(){
    this.auth.authState
  }
}
