import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Venda } from "./venda";

@Injectable({
  providedIn: "root"
})
export class VendaService {
  constructor(private _http: HttpClient) {}

  venda: Venda = new Venda();

  consultar(codigoVenda: string) {
    return this._http.get(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/" +
        codigoVenda
    );
  }

  incluir(venda: Venda) {
    return this._http.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir",
      venda
    );
  }

  alterar(venda: Venda) {
    return this._http.patch(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/alterarparcial",
      venda
    );
  }

  remover(venda: Venda) {
    return this._http.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover",
      venda
    );
  }
}
