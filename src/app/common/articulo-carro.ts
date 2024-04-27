import { Producto } from "./producto";

export class ArticuloCarro {

    id: string;
    nombre: string;
    url: string;
    unidadPrecio: number;

    cantidad: number;

    constructor(producto: Producto) {
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.url = producto.url;
        this.unidadPrecio = producto.precioUnidad;

        this.cantidad = 1;
    }

}
