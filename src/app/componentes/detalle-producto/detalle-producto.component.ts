import { Component } from '@angular/core';
import { Producto } from '../../common/producto';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { CarroService } from '../../services/carro.service';
import { ArticuloCarro } from '../../common/articulo-carro';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {

  producto!: Producto;

  constructor(private productoService: ProductoService,
    private route: ActivatedRoute, private carroService: CarroService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.principalProductoDetalle();
    })
  }

  principalProductoDetalle() {
    const productoId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productoService.getProducto(productoId).subscribe(
      data => {
        this.producto = data;
      }
    )
  }

  anadirCarro() {


    const articuloCarro = new ArticuloCarro(this.producto)
    this.carroService.anadirCarro(articuloCarro);

  }

}
