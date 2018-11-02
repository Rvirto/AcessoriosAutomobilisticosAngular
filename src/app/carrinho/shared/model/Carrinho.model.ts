import { ProdutoCarrinho } from './ProdutoCarrinho.model';
import { Cliente } from './../../../clientes/shared/model/modelo';
export class Carrinho {
  public id: number;
  public cliente = new Cliente();
  public produtoCarrinho: ProdutoCarrinho[] = [];
  public status: string;
}
