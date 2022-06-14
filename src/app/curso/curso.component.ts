import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public nombre: string;
  public followers: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.followers = +params.followers;

      if(this.nombre == 'ninguno'){
        this.router.navigate(['/home']);
      }
      
    });

  }

  redirigir(){
      this.router.navigate(['/zapatillas']);

  }
}
