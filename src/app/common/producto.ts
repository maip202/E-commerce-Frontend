export class Producto {

    

    constructor(
        public id: string,
        public nombre: string,
        public descripcion: string,
        public precioUnidad: number,
        public activo: boolean,
        public unidadesStock: number,
        public fechaCreacion: Date,
        public ultimaActualizacion: Date,
        public url: string,
        public sfid: string) {

    }
}

