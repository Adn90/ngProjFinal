import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cliente } from "./cliente";

@Injectable({
  providedIn: "root"
})
export class ClienteService {
  cliente: Cliente = new Cliente();

  constructor(private _http: HttpClient) {}

  consultar(nome: string) {
    return this._http.get(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/consultar/" +
        nome
    );
  }

  incluir(cliente: Cliente) {
    return this._http.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/incluir",
      cliente
    );
  }

  alterar(cliente: Cliente) {
    return this._http.patch(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/alterarparcial",
      cliente
    );
  }

  excluir(cliente: Cliente) {
    return this._http.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/remover",
      cliente
    );
  }
}
