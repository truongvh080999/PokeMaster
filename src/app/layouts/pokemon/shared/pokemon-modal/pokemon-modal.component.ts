import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { ListPokemonState } from '../../store';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss'],
})
export class PokemonModalComponent implements OnInit {
  pokemonDetail$ = this.store.select(ListPokemonState.pokemon);
  constructor(public activeModal: NgbActiveModal, private store: Store) {}

  ngOnInit(): void {}
}
