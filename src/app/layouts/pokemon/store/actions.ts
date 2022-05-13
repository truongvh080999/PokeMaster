import { STATE_NAME } from './state.model';

export const ActionTypes = {
  LOAD_POKEMONS: `[${STATE_NAME}] Load pokemons`,
  LOAD_POKEMON: `[${STATE_NAME}] Load pokemon`,
  SEARCH_POKEMONS: `[${STATE_NAME}] Search pokemon`,
  CLEAR_SELECTED: `[${STATE_NAME}] Clear selected pokemon`,
  CLEAR_LIST: `[${STATE_NAME}] Clear list pokemon`,
};

export class LoadPokemons {
  static readonly type = ActionTypes.LOAD_POKEMONS;
  constructor(public readonly limit?: number) {}
}
export class LoadPokemon {
  static readonly type = ActionTypes.LOAD_POKEMON;
  constructor(public readonly pokemon: any) {}
}
export class SearchPokemon {
  static readonly type = ActionTypes.SEARCH_POKEMONS;
  constructor(public readonly param: string) {}
}
export class ClearSelected {
  static readonly type = ActionTypes.CLEAR_SELECTED;
}
export class ClearList {
  static readonly type = ActionTypes.CLEAR_LIST;
}
