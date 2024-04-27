import { Component } from '@angular/core';
import { CarroService } from '../../services/carro.service';

@Component({
  selector: 'app-estado-carro',
  templateUrl: './estado-carro.component.html',
  styleUrl: './estado-carro.component.css'
})
export class EstadoCarroComponent {

  precioTotal: number = 0.00;
  cantidadTotal: number = 0;

  constructor(private carroServicio: CarroService) {}



  ngOnInit(): void {
    this.actualizarEstadoCarro();
  }

  actualizarEstadoCarro() {
    
    this.carroServicio.precioTotal.subscribe(
      data => this.precioTotal = data
    );

    this.carroServicio.cantidadTotal.subscribe(
      data => this.cantidadTotal = data
    );

  }

}
