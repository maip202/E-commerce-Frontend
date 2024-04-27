import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from './services/producto.service';

import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstadoCarroComponent } from './componentes/estado-carro/estado-carro.component';
import { DetalleCarroComponent } from './componentes/detalle-carro/detalle-carro.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'detalle-carro', component: DetalleCarroComponent },
  { path: 'productos/:id', component: DetalleProductoComponent },
  { path: 'search/:keyword', component: ListaProductosComponent },
  { path: 'categoria/:id', component: ListaProductosComponent },
  { path: 'categoria', component: ListaProductosComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: '**', redirectTo: '/productos', pathMatch: 'full' }

];
@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    MenuComponent,
    BusquedaComponent,
    DetalleProductoComponent,
    EstadoCarroComponent,
    DetalleCarroComponent,
    FormularioComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
