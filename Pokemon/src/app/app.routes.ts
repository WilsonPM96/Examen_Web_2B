import {Routes} from "@angular/router";
import {ContenedorComponent} from "./contenedor/contenedor.component";
import {LoginComponent} from "./Login/login/login.component";

export const RUTAS_APP: Routes = [
  {
    path:'home',
    component: ContenedorComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  }
]
