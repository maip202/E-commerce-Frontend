import { Component, OnInit } from '@angular/core';
import { CategoriaProducto } from '../../common/categoria-producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  categoriaProductos: CategoriaProducto[] = [];

  constructor(private productoServicio: ProductoService) {}

  ngOnInit(){

    this.categoriaProductosLista();
    
  }

  categoriaProductosLista() {
    this.productoServicio.getCategoriasProducto().subscribe(
      data => {        
        this.categoriaProductos = data;
      }
    )
  }

}
