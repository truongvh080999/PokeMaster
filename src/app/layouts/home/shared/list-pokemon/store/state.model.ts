export const STATE_NAME = 'Home';

export interface StateModel {
  pokemons?: { name: string; url: string }[];
  pokemon?: any;
}
