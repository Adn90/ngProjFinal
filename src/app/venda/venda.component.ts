import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VendaService } from "./servico/venda.service";
import { Venda } from "./servico/venda";

@Component({
  selector: "app-venda",
  templateUrl: "./venda.component.html",
  styleUrls: ["./venda.component.css"]
})
export class VendaComponent implements OnInit {
  constructor(private _router: Router, private _vendaService: VendaService) {}
  venda: Venda = new Venda();
  listaDeVendas: Venda[] = [];
  vendaSelecionada: Venda;

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this._vendaService
      .consultar(this.venda.codigo)
      .subscribe((vendas: Venda[]) => {
        this.listaDeVendas = vendas;
      });
  }

  pesquisar() {
    this.consultar();
  }

  incluir() {
    this._router.navigate(["/venda/incluir"]);
  }

  selecionar(venda: Venda) {
    this.vendaSelecionada = venda;
  }

  alterar() {
    if (this.vendaSelecionada) {
      this._router.navigate(["/venda/alterar/" + this.vendaSelecionada.codigo]);
    } else {
      alert("Escolha uma Venda para realizar operação!!");
    }
  }

  remover() {
    if (this.vendaSelecionada) {
      this._vendaService
        .remover(this.vendaSelecionada)
        .subscribe((venda: Venda) => {
          alert(venda["mensagem"]);
        });
    } else {
      alert("Escolha uma Venda para realizar operação!!");
    }
  }

  recarregar() {
    this._vendaService
      .consultar("")
      .subscribe((vendas: Venda[]) => {
        this.listaDeVendas = vendas;
      });
  }
}
