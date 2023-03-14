import Porta from "@/components/Porta";
import PortaModel from "@/model/porta";

export function criarPortas(
  qtde: number,
  portasComPresente: number
): PortaModel[] {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === portasComPresente;
    return new PortaModel(numero, temPresente);
  });
}

export function atualizarPortas(
  portas: PortaModel[],
  portaModificada: PortaModel
): PortaModel[] {
  return portas.map((portaAtual) => {
    const igualModificada = portaAtual.numero === portaModificada.numero;

    if (igualModificada) {
      return portaModificada;
    } else {
      return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
    }
  });
}
