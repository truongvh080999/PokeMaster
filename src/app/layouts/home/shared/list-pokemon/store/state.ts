import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { STATE_NAME, StateModel } from './state.model';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { LoadPokemons, LoadPokemon, ClearSelected, ClearList } from './actions';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

const API = environment.serverUrl;

@State<StateModel>({
  name: STATE_NAME,
})
@Injectable()
export class HomePokemonState {
  @Selector()
  static pokemons({ pokemons }: StateModel) {
    return pokemons;
  }

  @Selector()
  static pokemon({ pokemon }: StateModel) {
    return pokemon;
  }

  constructor(private http: HttpClient) {}

  @Action(LoadPokemons)
  LoadPokemons({ getState, patchState }: StateContext<StateModel>) {
    const currentPokemons = getState().pokemons;
    let httpParams = new HttpParams();
    httpParams = httpParams.append('offset', currentPokemons?.length || 0);
    httpParams = httpParams.append('limit', 20);
    return this.http
      .get<any>(`${API}pokemon`, {
        params: httpParams,
      })
      .pipe(
        tap((pokemons) => {
          patchState({
            pokemons: (currentPokemons || []).concat(pokemons.results),
          });
        })
      );
  }
  @Action(LoadPokemon)
  LoadPokemon(
    { patchState }: StateContext<StateModel>,
    { pokemon }: LoadPokemon
  ) {
    patchState({ pokemon: pokemon });
  }

  @Action(ClearSelected)
  ClearSelectedPokemon({ patchState }: StateContext<StateModel>) {
    patchState({ pokemon: undefined });
  }
  @Action(ClearList)
  ClearList({ patchState }: StateContext<StateModel>) {
    patchState({ pokemons: undefined });
  }
}
