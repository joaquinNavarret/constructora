import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// firebase config
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructoraComponent } from './constructora/constructora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './campos/component/inicio/inicio.component';
import { ServicioComponent } from './campos/component/servicio/servicio.component';
import { MaterialesComponent } from './campos/component/materiales/materiales.component';
import { ContactoComponent } from './campos/component/contacto/contacto.component';
import { ProyectosComponent } from './campos/component/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructoraComponent,
    LoginComponent,
    InicioComponent,
    ServicioComponent,
    MaterialesComponent,
    ContactoComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp (environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
