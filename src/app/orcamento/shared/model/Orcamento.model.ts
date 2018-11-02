import { Cliente } from './../../../clientes/shared/model/modelo';
import { ProdutoCarrinho } from './../../../carrinho/shared/model/ProdutoCarrinho.model';
export class Orcamento {
  public id: number;
  public produtosCarrinho: ProdutoCarrinho[] = [];
  public cliente: Cliente = new Cliente();
  public valorTotal: number;
  public desconto: number;
}
