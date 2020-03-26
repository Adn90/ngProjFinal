import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Cliente } from "./servico/cliente";
import { ClienteService } from "./servico/cliente.service";

@Component({
  selector: "app-cliente",
  templateUrl: "./cliente.component.html",
  styleUrls: ["./cliente.component.css"]
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  listaDeClientes: Cliente[] = [];

  clienteSelecionado: Cliente;

  constructor(
    private _router: Router,
    private _clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this._clienteService
      .consultar(this.cliente.nome)
      .subscribe((cliente: Cliente[]) => {
        this.listaDeClientes = cliente;
      });
  }

  pesquisar() {
    this.consultar();
  }

  incluir() {
    this._router.navigate(["/cliente/incluir"]);
  }

  selecionar(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  alterar() {
    if (this.clienteSelecionado) {
      this._router.navigate([
        "/cliente/alterar/" + this.clienteSelecionado.nome
      ]);
    } else {
      alert("Escolha um cliente para realizar operação!!");
    }
  }

  remover() {
    if (this.clienteSelecionado) {
      this._clienteService
        .excluir(this.clienteSelecionado)
        .subscribe((cliente: Cliente[]) => {
          alert(cliente["mensagem"]);
        });
    } else {
      alert("Escolha um cliente para realizar operação!!");
    }
  }

  recarregar() {
    location.reload();
  }
}
