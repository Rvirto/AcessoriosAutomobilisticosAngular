import { Cliente } from './../../../clientes/shared/model/modelo';
import { Produto } from './../../../produtos/shared/model/Produto.model';
export class Carrinho {

  public id: number;
  public cliente = new Cliente();
  public produto: Produto[];
}
