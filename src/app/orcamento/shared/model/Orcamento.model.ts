import { ProdutoImagem } from './../../../produtos/shared/model/ProdutoImagem.mode';
import { Cliente } from './../../../clientes/shared/model/modelo';

export class Orcamento {
  public id: number;
  public produtos: ProdutoImagem[] = [];
  public cliente: Cliente = new Cliente();
  public valorTotal: number;
  public desconto: number;
}
