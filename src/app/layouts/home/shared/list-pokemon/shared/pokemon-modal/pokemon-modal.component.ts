import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { ClearSelected, HomePokemonState } from '../../store';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss'],
})
export class PokemonModalComponent implements OnInit, OnDestroy {
  pokemonDetail$ = this.store.select(HomePokemonState.pokemon);
  constructor(public activeModal: NgbActiveModal, private store: Store) {}
  ngOnDestroy(): void {
    this.store.dispatch(new ClearSelected());
  }

  ngOnInit(): void {}
}
