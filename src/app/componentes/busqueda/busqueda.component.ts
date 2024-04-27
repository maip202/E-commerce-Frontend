import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  constructor(private router: Router) {}

  buscarNombre(value: string) {
    this.router.navigateByUrl(`/search/${value}`);
  }

}
