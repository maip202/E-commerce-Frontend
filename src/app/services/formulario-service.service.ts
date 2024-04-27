import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioServiceService {

  constructor() { }

  getTarjetaCreditoAño(): Observable<number[]> {
    let datos: number[] = [];

    const fechaAnualPrimera: number = new Date().getFullYear();
    const fechaAnualFinal: number =fechaAnualPrimera + 10;

    for(let anual = fechaAnualPrimera; anual <= fechaAnualFinal; anual++) {
      datos.push(anual)
    }

    return of(datos);
  }

}

