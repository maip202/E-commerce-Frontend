import { ArticuloCarro } from "./articulo-carro";

export class ArticuloPedido {

    url: string;
    unidadPrecio: number;
    cantidad: number;
    productoId: string;

    constructor(articuloCarro: ArticuloCarro) {
        this.url = articuloCarro.url;
        this.unidadPrecio = articuloCarro.unidadPrecio;
        this.cantidad = articuloCarro.cantidad;
        this.productoId = articuloCarro.id;
    }
}
