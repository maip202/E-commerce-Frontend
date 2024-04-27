import { ArticuloPedido } from "./articulo-pedido";
import { Cliente } from "./cliente";
import { Direccion } from "./direccion";
import { Pedido } from "./pedido";

export class Compras {

    cliente: Cliente;
    direccion: Direccion;
    pedido: Pedido;
    articuloPedido: ArticuloPedido[];

}
