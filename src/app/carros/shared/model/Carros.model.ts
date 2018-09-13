import { Cliente } from './Cliente.model';

export class Carro {
  public id: number;
  public placa: string;
  public carro: string;
  public modelo: string;
  public ano: number;
  public cor: string;
  public cliente = new Cliente();
}
