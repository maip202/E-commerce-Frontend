import { Injectable } from '@angular/core';
import { ArticuloCarro } from '../common/articulo-carro';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {


  articulosCarro: ArticuloCarro[] = [];

  precioTotal: Subject<number> = new Subject<number>;
  cantidadTotal: Subject<number> = new Subject<number>;

  constructor() { }

  anadirCarro(articuloCarroParam: ArticuloCarro) {

    let yaExisteArticulo: boolean = false;
    let articuloExistente: ArticuloCarro = undefined;

    if (this.articulosCarro.length > 0) {

      articuloExistente = this.articulosCarro.find( articuloTemporal => 
        articuloTemporal.id === articuloCarroParam.id);

      yaExisteArticulo = (articuloExistente != undefined)

    }


      if(yaExisteArticulo) {
        articuloExistente.cantidad++
      }  else {
      this.articulosCarro.push(articuloCarroParam);
    }

    this.computarCarroTotal()

  }

  bajarCantidad(articuloCarro: ArticuloCarro) {
    
    articuloCarro.cantidad--;

    if(articuloCarro.cantidad === 0) {
      this.remove(articuloCarro);
    } else {
      this.computarCarroTotal();
    }


  }

  remove(articuloCarro: ArticuloCarro) {
    const articuloIndice = this.articulosCarro.findIndex(articuloCarroTemp => articuloCarroTemp.id === articuloCarro.id );

    if(articuloIndice > -1) {
      this.articulosCarro.splice(articuloIndice, 1);

      this.computarCarroTotal();
    }
  }
  
  computarCarroTotal() {
    let totalPrecioFinal: number = 0;
    let totalCantidadFInal: number = 0;

    for(let actualArticuloCarro of this.articulosCarro) {
      totalPrecioFinal += actualArticuloCarro.cantidad * actualArticuloCarro.unidadPrecio;
      totalCantidadFInal += actualArticuloCarro.cantidad;
    }

    this.precioTotal.next(totalPrecioFinal);
    this.cantidadTotal.next(totalCantidadFInal);

    this.comprobarData(totalCantidadFInal, totalPrecioFinal);

  }
  comprobarData(totalCantidadFInal: number, totalPrecioFinal: number) {
    for(let tempCarroArti of this.articulosCarro) {
      const subTotalPrice = tempCarroArti.cantidad * tempCarroArti.unidadPrecio;
      
    }



  }
}
