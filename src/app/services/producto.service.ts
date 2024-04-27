import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Producto } from '../common/producto';
import { CategoriaProducto } from '../common/categoria-producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = 'http://localhost:8080/api/productos'

  private categoriaUrl = 'http://localhost:8080/api/categoria-producto'

  constructor(private httpClient: HttpClient) { }

  getListaProductosPaginacion(pagina: number, tamañoPâgina: number, categoriaId: number): Observable<GetResponseProducto> {

    const buscarUrl = `${this.url}/search/findByCategoriaId?id=${categoriaId}` 
    + `&page=${pagina}&size=${tamañoPâgina}`

    
    return this.httpClient.get<GetResponseProducto>(buscarUrl);
    
  }

  getBusquedaListaProductosPaginacion(pagina: number, tamañoPâgina: number, theKeyword: string): Observable<GetResponseProducto> {

    const buscarUrl = `${this.url}/search//search/findByNombre?nombre=${theKeyword}` 
    + `&page=${pagina}&size=${tamañoPâgina}`

    
    return this.httpClient.get<GetResponseProducto>(buscarUrl);
    
  }

  getListaProductos(categoriaId: number): Observable<Producto[]> {

    const buscarUrl = `${this.url}/search/findByCategoriaId?id=${categoriaId}`

    
    return this.httpClient.get<GetResponseProducto>(buscarUrl).pipe(
      map(response => response._embedded.producto)
    );
  }

  getCategoriasProducto(): Observable<CategoriaProducto[]> {

    return this.httpClient.get<GetResponseCategoria>(this.categoriaUrl).pipe(
      map(response => response._embedded.categoriaProducto)
    );
    
  }

  buscarNombre(theKeyword: string) {

    const buscarUrl = `${this.url}/search/findByNombre?nombre=${theKeyword}`

    
    return this.httpClient.get<GetResponseProducto>(buscarUrl).pipe(
      map(response => response._embedded.producto)
    );
    
  }

  getProducto(productoId: number): Observable<Producto> {

    const productoIdrUrl = `${this.url}/${productoId}`

    return this.httpClient.get<Producto>(productoIdrUrl);
    
  }

}

interface GetResponseProducto {
_embedded: {
  producto: Producto[];
}
page: {
  size: number,
  totalElements: number,
  totalPages: number,
  number: number
}
}

interface GetResponseCategoria {
  _embedded: {
    categoriaProducto: CategoriaProducto[];
  }
  }