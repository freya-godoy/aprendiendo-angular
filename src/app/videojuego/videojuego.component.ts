import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'; //Hooks y eventos: OnInit, DoCheck, OnDestroy

@Component({
    selector: 'videojuego',
    templateUrl:'./videojuego.component.html'
})
export class videjuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){

        this.titulo = "Componente de Videojuegos";
        this.listado = "Lista de Videojuegos malos menos el GTA";

       // console.log("Se ha cargaddo un componente: videjuego.component.ts");
    }

    ngOnInit() {
      //console.log("OnInit ejecutado")  
    }

    ngDoCheck(){
        //console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
        //console.log("OnDestroy ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente";
    }
}



