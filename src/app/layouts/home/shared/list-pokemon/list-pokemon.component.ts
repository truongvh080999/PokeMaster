import { Store } from '@ngxs/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClearList, HomePokemonState, LoadPokemons } from './store';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit, OnDestroy {
  listPokemon$ = this.store.select(HomePokemonState.pokemons);
  filter = {
    offset: 0,
    limit: 10,
  };
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getListPokemon();
  }
  getListPokemon() {
    this.store.dispatch(new LoadPokemons());
  }
  ngOnDestroy(): void {
    this.store.dispatch(new ClearList());
  }
}
