import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProdutoService } from "./servico/produto.service";
import { Produto } from "./servico/produto";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})
export class ProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  listaDeProdutos: Produto[] = [];
  produtoSelecionado: Produto;

  constructor(
    private _router: Router,
    private _produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this._produtoService
      .consultar(this.produto.nome)
      .subscribe((produto: Produto[]) => {
        this.listaDeProdutos = produto;
      });
  }

  pesquisar() {
    this.consultar();
  }

  incluir() {
    this._router.navigate(["/produto/incluir"]);
  }

  selecionar(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  alterar() {
    if (this.produtoSelecionado) {
      this._router.navigate([
        "produto/alterar/" + this.produtoSelecionado.nome
      ]);
    } else {
      alert("Escolha um Produto para realizar operação!!");
    }
  }

  remover() {
    if (this.produtoSelecionado) {
      this._produtoService
        .remover(this.produtoSelecionado)
        .subscribe((produto: Produto) => {
          alert(produto["mensagem"]);
        });
    } else {
      alert("Escolha um Produto para realizar operação!");
    }
  }

  recarregar() {
    location.reload();
  }
}
