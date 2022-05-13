import { ReusableService } from './../../services/api/reusable.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import {
  ClearList,
  ClearSelected,
  ListPokemonState,
  LoadPokemons,
  SearchPokemon,
} from './store';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  listPokemon$ = this.store.select(ListPokemonState.pokemons);
  searchPokemon$ = this.store.select(ListPokemonState.pokemon);
  search: FormControl = this.fb.control('');
  filter = {
    offset: 0,
    limit: 20,
  };
  paging = 20;
  onSearch = false;
  constructor(
    private fb: FormBuilder,
    private reusableService: ReusableService,
    private store: Store
  ) {
    this.search.valueChanges
      .pipe(
        map((e) => e),
        debounceTime(3000)
      )
      .subscribe((res) => {
        if (res !== '') {
          this.onSearch = true;
        } else {
          this.onSearch = false;
          this.store.dispatch(new ClearSelected());
        }
        this.getData(false, res);
      });
  }

  ngOnInit(): void {
    this.getData(false);
  }
  getData(paging: boolean, search: string = '') {
    if (paging) {
      this.filter = { offset: 0, limit: this.paging };
      this.store.dispatch(new ClearList());
    }
    if (this.onSearch) {
      this.store.dispatch(new ClearList());
      this.store.dispatch(new SearchPokemon(search));
    } else {
      this.store.dispatch(new LoadPokemons(this.paging));
    }
  }
}
