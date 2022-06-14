import { Component, OnInit } from "@angular/core";
import { Alert } from "selenium-webdriver";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatillas.service";


@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]

})
export class zapatillasComponent implements OnInit {
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String [];
    public color: string;
    public mi_marca: string;

    constructor(
        private ZapatillaService: ZapatillaService
    ) {
        this.color = 'yellow';
        this.marcas =  new Array();
        this.zapatillas = [
            new Zapatilla('Nike Dior', 'Nike', 'Negro', 40, true),
            new Zapatilla('Nike Classic', 'Nike', 'Negro', 80, true),
            new Zapatilla('Adidas Classic', 'Adidas', 'Blanco', 60, true),
            new Zapatilla('Puma Classic', 'Puma', 'Rosa', 180, false)
        ];
    }

    ngOnInit() {
        this.zapatillas = this.ZapatillaService.getZapatillas();
         alert(this.ZapatillaService.getTexto())
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
        if(this.marcas.indexOf(zapatilla.marca) < 0){
            this.marcas.push(zapatilla.marca);
        }
            
    });
    console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index){
      // delete this.marcas[index]; // borra y deja undefined 
      this.marcas.splice(index, 1); //borra completamente 
    }

    onBlur(){
        console.log("onBlur activado");
    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }
}