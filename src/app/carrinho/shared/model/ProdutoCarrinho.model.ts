import { ProdutoImagem } from './../../../produtos/shared/model/ProdutoImagem.mode';
export class ProdutoCarrinho {
  public id: number;
  public quantidade: number;
  public valorVenda: number;
  public produto: ProdutoImagem = new ProdutoImagem();
}
