import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../common/producto';
import { ActivatedRoute } from '@angular/router';
import { ArticuloCarro } from '../../common/articulo-carro';
import { CarroService } from '../../services/carro.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  productos: Producto[] = [];
  categoriaId: number = 1;
  categoriaAnteriorId: number = 1;
  busqueda: boolean = false;

  pagina: number = 1;
  tamanoPagina: number = 10;
  totalElementos: number = 1;


  constructor(private productoServicio: ProductoService,
    private route: ActivatedRoute, private carroService: CarroService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.productosLista();
    });
  }


  productosLista() {

    this.busqueda = this.route.snapshot.paramMap.has('keyword');

    if (this.busqueda) {

      this.principalBuscarProductos();

    } else {

      this.principalListaProductos();

    }



  }

  principalListaProductos() {

    const tieneCategoria: boolean = this.route.snapshot.paramMap.has('id');

    if (tieneCategoria) {

      this.categoriaId = +this.route.snapshot.paramMap.get('id')!;

    } else {
      this.categoriaId = 1;
    }

    if (this.categoriaAnteriorId != this.categoriaId) {
      this.pagina = 1;
    }

    this.categoriaAnteriorId = this.categoriaId




    this.productoServicio.getListaProductosPaginacion(this.pagina - 1, this.tamanoPagina, this.categoriaId).subscribe(data => {
      this.productos = data._embedded.producto;
      this.pagina = data.page.number + 1;
      this.tamanoPagina = data.page.size;
      this.totalElementos = data.page.totalElements;
    });


  }

  principalBuscarProductos() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    this.productoServicio.buscarNombre(theKeyword).subscribe(
      data => {
        this.productos = data;
      }
    )

  }

  anadirCarro(producto: Producto) {


    const elArticuloCarro = new ArticuloCarro(producto);

    this.carroService.anadirCarro(elArticuloCarro);

  }

}
