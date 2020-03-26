import { Component, OnInit } from "@angular/core";
import { Cliente } from "../servico/cliente";
import { Router, ActivatedRoute } from "@angular/router";
import { ClienteService } from "../servico/cliente.service";

@Component({
  selector: "app-cliente-manter",
  templateUrl: "./cliente-manter.component.html",
  styleUrls: ["./cliente-manter.component.css"]
})
export class ClienteManterComponent implements OnInit {
  cliente: Cliente = new Cliente();

  operacao: string = "Incluir";
  nomeCliente: string = "";

  constructor(
    private _router: Router,
    private _clienteService: ClienteService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.identificarOperacao();
  }

  incluir() {
    this._clienteService.incluir(this.cliente).subscribe((cliente: Cliente) => {
      alert(cliente['mensagem']);
      this.voltar();
    });
  }

  voltar(){
    this._router.navigate(['/cliente']);
  }

  alterar() {
    this._clienteService.alterar(this.cliente).subscribe((cliente: Cliente) => {
      alert(cliente['mensagem']);
      this.voltar();
    })
  }

  identificarOperacao() {
    this.nomeCliente = this._activatedRoute.snapshot.params.id;
    if (this.nomeCliente != null) {
      this.operacao = 'Alterar';
      this._clienteService.consultar(this.nomeCliente).subscribe((cliente: Cliente) => {
        this.cliente = cliente[0];
      })
    }
  }
}
