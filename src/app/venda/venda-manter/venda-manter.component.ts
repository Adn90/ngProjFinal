import { Component, OnInit } from "@angular/core";
import { Venda } from "../servico/venda";
import { Produto } from "src/app/produto/servico/produto";
import { Cliente } from "src/app/cliente/servico/cliente";
import { ActivatedRoute, Router } from "@angular/router";
import { ClienteService } from "src/app/cliente/servico/cliente.service";
import { ProdutoService } from "src/app/produto/servico/produto.service";
import { VendaService } from "../servico/venda.service";
import { Vendaitens } from "../servico/vendaItens";

@Component({
  selector: "app-venda-manter",
  templateUrl: "./venda-manter.component.html",
  styleUrls: ["./venda-manter.component.css"]
})
export class VendaManterComponent implements OnInit {
  
  listaDeClientes: Cliente[] = [];

  venda: Venda = new Venda();
  operacao: string = "Incluir";

  produto: Produto = new Produto();
  listaDeProdutos: Produto[] = [];

  vendaItem: Vendaitens = new Vendaitens();

  nomeVenda: string = "";

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _clienteService: ClienteService,
    private _produtoService: ProdutoService,
    private _vendaService: VendaService
  ) {}

  ngOnInit(): void {
    this.pesquisarClientes();
    this.pesquisarProdutos();
    this.identificarOperacao();

  }

  pesquisarClientes() {
    this._clienteService.consultar("").subscribe((cliente: Cliente[]) => {
      this.listaDeClientes = cliente;
    });
  }

  pesquisarProdutos() {
    this._produtoService.consultar("").subscribe((produto: Produto[]) => {
      this.listaDeProdutos = produto;
    });
  }

  voltar() {
    this._router.navigate(["/venda"]);
  }

  incluir() {
    this._vendaService.incluir(this.venda).subscribe((venda: Venda) => {
      alert(venda['mensagem']);
      this.voltar();
    });
  }

  alterar() {

  }

  adicionar() {
    this.venda.listaDeVendas.push(this.vendaItem);
    this.vendaItem = new Vendaitens();
  }

  removerItem(vendaItem: Vendaitens) {
    this.venda.listaDeVendas = this.venda.listaDeVendas.filter(
      obj => obj !== vendaItem
    );
  }

  // não faz sentido
  identificarOperacao() {
    this.nomeVenda = this._activatedRoute.snapshot.params.id;
    if (this.nomeVenda != null) {
      this.operacao = "Alterar";
      this._vendaService.consultar(this.nomeVenda).subscribe((venda: Venda) => {
        this.venda = venda[0];
      });
      
    }
  }
}
