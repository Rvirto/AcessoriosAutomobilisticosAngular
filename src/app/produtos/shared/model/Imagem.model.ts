import { Produto } from './Produto.model';

export class Imagem {
  public id: number;
  public nome: string;
  public produto: Produto = new Produto();
}
