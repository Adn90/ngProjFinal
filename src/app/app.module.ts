import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { ClienteManterComponent } from './cliente/cliente-manter/cliente-manter.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoManterComponent } from './produto/produto-manter/produto-manter.component';
import { VendaComponent } from './venda/venda.component';
import { VendaManterComponent } from './venda/venda-manter/venda-manter.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ClienteComponent,
    HomeComponent,
    ClienteManterComponent,
    ProdutoComponent,
    ProdutoManterComponent,
    VendaComponent,
    VendaManterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
