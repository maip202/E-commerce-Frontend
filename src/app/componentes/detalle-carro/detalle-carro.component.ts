import { Component } from '@angular/core';
import { ArticuloCarro } from '../../common/articulo-carro';
import { CarroService } from '../../services/carro.service';

@Component({
  selector: 'app-detalle-carro',
  templateUrl: './detalle-carro.component.html',
  styleUrl: './detalle-carro.component.css'
})
export class DetalleCarroComponent {

  articuloCarro: ArticuloCarro[] = [];

  precioTotal: number = 0;
  cantidadTotal: number = 0;

  constructor(private carroSerice: CarroService) {}

  ngOnInit(): void {
    this.listadoCarroDetalles();
  }

  listadoCarroDetalles() {
    this.articuloCarro = this.carroSerice.articulosCarro;

    this.carroSerice.precioTotal.subscribe(
      data => this.precioTotal = data
    )

    this.carroSerice.cantidadTotal.subscribe(
      data => this.cantidadTotal = data
    )

    this.carroSerice.computarCarroTotal()
  }

  subirCantidad(articuloCarro: ArticuloCarro) {

    this.carroSerice.anadirCarro(articuloCarro);
  }

  bajarCantidad(articuloCarro: ArticuloCarro) {
    this.carroSerice.bajarCantidad(articuloCarro);
  }

  remove(articuloCarro: ArticuloCarro) {
    this.carroSerice.remove(articuloCarro)
  }

}
