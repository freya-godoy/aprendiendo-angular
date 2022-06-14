// Importar modulos del router de angular 
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Importar componentes 
import { HomeComponent } from './home/home.component';
import { zapatillasComponent } from "./zapatillas/zapatillas.component";
import { videjuegoComponent } from "./videojuego/videojuego.component";
import { CursoComponent } from "./curso/curso.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";
// Array de rutas 
const appRouters: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: zapatillasComponent},
    {path: 'videojuego', component: videjuegoComponent},
    {path: 'cursos', component: CursoComponent},
    {path: 'cursos/:nombre/:followers', component: CursoComponent},
    {path: 'externo', component: ExternoComponent},
    {path: 'contacto', component: ContactoComponent },
    {path: '**', component: HomeComponent}
];

// Exportar el modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);