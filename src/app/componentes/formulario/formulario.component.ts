import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormularioServiceService } from '../../services/formulario-service.service';
import { RevisarService } from '../../services/revisar.service';
import { Router } from '@angular/router';
import { Pedido } from '../../common/pedido';
import { CarroService } from '../../services/carro.service';
import { ArticuloPedido } from '../../common/articulo-pedido';
import { Compras } from '../../common/compras';
import { ArticuloCarro } from '../../common/articulo-carro';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formularioFormGroup: FormGroup;

  precioTotal: number = 0.00;
  cantidadTotal: number = 0;

  tarjetaDeCreditoAnual: number[] = [];

  articuloCarro: ArticuloCarro[] = [];


  constructor(private formBuilder: FormBuilder, private formularioService: FormularioServiceService
    , private carroServicio: CarroService, private router: Router, private revisarService: RevisarService
  ) {}

  ngOnInit(): void {
    this.formularioFormGroup = this.formBuilder.group({
      cliente: this.formBuilder.group({
        nombre: [''],
        apellido: [''],
        correo: ['']
      }),
      direccion: this.formBuilder.group({
        calle: [''],
        ciudad: [''],
        provincia: [''],
        pais: [''],
        postal: ['']
      }),
      tarjetaCredito: this.formBuilder.group({
        tipo: [''],
        nombre: [''],
        numero: [''],
        codigo: [''],
        expiracion: ['']
      }),
    });

    this.formularioService.getTarjetaCreditoAño().subscribe(
      data => {
        this.tarjetaDeCreditoAnual = data;
      }
    )

    this.listadoCarroDetalles();

  }

  onSubmit() {

    let pedido = new Pedido();
    pedido.cantidadTotal = this.cantidadTotal;
    pedido.precioTotal = this.precioTotal;

    const articuloCarro = this.carroServicio.articulosCarro;

    let articulosPedido: ArticuloPedido[] = [];
    for (let i = 0; i < articuloCarro.length; i++) {
      articulosPedido[i] = new ArticuloPedido(articuloCarro[i]);
    }

    let compras = new Compras();

    compras.cliente = this.formularioFormGroup.controls['cliente'].value;


    compras.direccion = this.formularioFormGroup.controls['direccion'].value;

    compras.pedido = pedido;
    compras.articuloPedido = articulosPedido;

    this.revisarService.lugarCompra(compras).subscribe(
      {
        next: response => {
          alert(`exito al realizar la compra: ${response.pedidoNumero}`)

          this.resetearCarro();
        },
        error: err => {
          alert(`erro en la compra${err.message}`)
        }
      }
    )

    
  }

  resetearCarro() {
    this.carroServicio.articulosCarro = [];
    this.carroServicio.precioTotal.next(0)
    this.carroServicio.cantidadTotal.next(0)

    this.formularioFormGroup.reset()

    this.router.navigateByUrl("/productos")
  }

  listadoCarroDetalles() {
    this.articuloCarro = this.carroServicio.articulosCarro;

    this.carroServicio.precioTotal.subscribe(
      data => this.precioTotal = data
    )

    this.carroServicio.cantidadTotal.subscribe(
      data => this.cantidadTotal = data
    )

    this.carroServicio.computarCarroTotal()
  }


}
