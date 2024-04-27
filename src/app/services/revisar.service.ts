import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compras } from '../common/compras';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevisarService {

  private comprasUrl = 'http://localhost:8080/api/formulario/compra'

  constructor(private httpClient: HttpClient) { }

  lugarCompra(compra: Compras): Observable<any> {
    return this.httpClient.post<Compras>(this.comprasUrl, compra);
  }
}
