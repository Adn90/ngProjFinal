import { Component, OnInit } from "@angular/core";
import { Produto } from "../servico/produto";
import { Router, ActivatedRoute } from "@angular/router";
import { ProdutoService } from "../servico/produto.service";

@Component({
  selector: "app-produto-manter",
  templateUrl: "./produto-manter.component.html",
  styleUrls: ["./produto-manter.component.css"]
})
export class ProdutoManterComponent implements OnInit {
  produto: Produto = new Produto();
  operacao: string = "Incluir";
  nomePoduto: string = "";

  constructor(
    private _router: Router,
    private _produtoService: ProdutoService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.identificarOperacao();
  }

  incluir() {
    this._produtoService.incluir(this.produto).subscribe((produto: Produto) => {
      alert(produto['mensagem']);
      this.voltar();
    });
  }

  voltar() {
    this._router.navigate(["/produto"]);
  }

  alterar() {
    this._produtoService.alterar(this.produto).subscribe((produto: Produto) => {
      alert(produto["mensagem"]);
      this.voltar();
    });
  }

  identificarOperacao() {
    this.nomePoduto = this._activatedRoute.snapshot.params.id;
    if (this.nomePoduto != null) {
      this.operacao = "Alterar";
      this._produtoService
        .consultar(this.nomePoduto)
        .subscribe((produto: Produto) => {
          this.produto = produto[0];
        });
    }
  }
}
