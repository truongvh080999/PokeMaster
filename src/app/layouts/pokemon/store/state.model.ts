export const STATE_NAME = 'List';

export interface StateModel {
  pokemons?: { name: string; url: string }[];
  pokemon?: any;
}
