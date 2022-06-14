//Como crear un servicio y como utilizarlo 

import { Inject, Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;

 constructor(){
    this.zapatillas = [
        new Zapatilla('Nike Dior', 'Nike', 'Negro', 40, true),
        new Zapatilla('Nike Classic', 'Nike', 'Negro', 80, true),
        new Zapatilla('Adidas Classic', 'Adidas', 'Blanco', 60, true),
        new Zapatilla('Puma Classic', 'Puma', 'Rosa', 180, false)
    ];
 }

 getTexto(){
     return "Hola Mundo desde servicio";
 }

 getZapatillas(): Array<Zapatilla>{
     return this.zapatillas;
 }
    
}