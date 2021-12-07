import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/autentificacion/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  public formularioLogin: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { 

    //inicializo mi formulario
    this.formularioLogin = fb.group({
      username: ['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  
  iniciarSesion(){

    //preguntamos si es formulario es valido
    if(!this.formularioLogin.invalid){

      //obtengo esos datos del formulario
      const {username, password} = this.formularioLogin.value;
      //inicia sesion en firebase llamando al metodo de mi servicio.
      this.auth.login(username, password);
      alert("iniciaste sesion campeon de forma correcta")
      this.router.navigateByUrl('servicio')
    }
    else{
      alert("revise los datos, son incorrectos");
    }
  }
}
