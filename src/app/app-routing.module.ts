import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './campos/component/contacto/contacto.component';
import { InicioComponent } from './campos/component/inicio/inicio.component';
import { MaterialesComponent } from './campos/component/materiales/materiales.component';
import { ProyectosComponent } from './campos/component/proyectos/proyectos.component';
import { ServicioComponent } from './campos/component/servicio/servicio.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'materiales', component: MaterialesComponent},
  {path:'servicio', component: ServicioComponent},
  {path:'proyecto', component: ProyectosComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

