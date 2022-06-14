import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;

  public new_user: any;
  public usuario_guardado;

  constructor(
    private peticionesService: PeticionesService
  ) {
    this.userId = 1;

    this.new_user = {
      "name": "",
      "job": ""
    };
  }

  ngOnInit() {

    this.fecha = new Date(); //fecha con valor de javaScrype

    this.cargaUsuario();
  }

  cargaUsuario() {
    this.user = false;
    this.peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form) {
    this.peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.usuario_guardado = response;
        console.log(response);

      },
      error => {
        console.log(<any>error);
        form.reset();
      }

    );
  }

}
