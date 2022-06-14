import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public contactousuario: ContactoUsuario;
  public show_data;
  constructor() {
    this.contactousuario = new ContactoUsuario('', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit(form) {
   this.show_data = this.contactousuario;
   console.log(this.show_data);
  }

}
