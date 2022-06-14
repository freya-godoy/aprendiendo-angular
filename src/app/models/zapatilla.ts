export class Zapatilla{  // define como propiedad 
   /* public nombre: string;
    public marca: string;
    public color: string; // pasar como parametro 
    public precio: number;
    public stock: boolean;
     
     constructor(nombre, marca, color, precio, stock){
         this.nombre = nombre;
         this.marca = marca;  // asignarle un valor
         this.color = color;
         this.precio = precio;
         this.stock = stock;
     }*/

     //Cargar de otra manera, definiendo la propiedad dentro del constructor, como parametro

     constructor(
     public nombre: string, //Define la propiedad de mi clase y automaticamente me va asignar un valor a la propiedad
     public marca: string,
     public color: string, 
     public precio: number,
     public stock: boolean
     ){}
}