// src/types/Filme.ts
export interface Filme {
  id: number;
  titulo: string;
  tipo: 'Filme' | 'Série';
  genero: string;
  ano_lancamento: number;
  sinopse: string;
}
