import { Cliente } from 'src/app/cliente/servico/cliente';
import { Vendaitens } from './vendaItens';


export class Venda {
    codigo: string = '';
    cliente: Cliente = new Cliente();
    listaDeVendas: Vendaitens[] = [];
    dataVenda: Date;
}