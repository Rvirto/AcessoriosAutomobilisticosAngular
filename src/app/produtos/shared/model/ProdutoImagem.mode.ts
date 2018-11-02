import { Servico } from './../../../servicos/shared/model/Servico.model';
import { Fornecedor } from './../../../fornecedores/shared/model/fornecedor.model';
export class ProdutoImagem {
  public id: number;
  public produto: string;
  public precoCompra: number;
  public precoVenda: number;
  public quantidade: number;
  public descricao: string;
  public fornecedor = new Fornecedor();
  public servico = new Servico();
  public imagem: string;
}
