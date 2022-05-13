import { ListPokemonState } from './../../store/state';
import { Store } from '@ngxs/store';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReusableService } from 'src/app/services/api/reusable.service';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';
import { LoadPokemon } from '../../store';

@Component({
  selector: 'pokemon',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() pokemon: { name: string; url: string } = { name: '', url: '' };
  @Input() searching: boolean = false;
  pokemonSearch$ = this.store.select(ListPokemonState.pokemon);
  pokemonDetail: any;
  constructor(
    private reusableService: ReusableService,
    private modalService: NgbModal,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }
  getPokemon() {
    this.reusableService
      .getMethod(`pokemon/${this.pokemon.name}`)
      .subscribe((res) => {
        this.pokemonDetail = { ...res };
      });
  }
  showModal() {
    this.modalService.open(PokemonModalComponent, {
      centered: true,
    });
    if (!this.searching) {
      this.store.dispatch(new LoadPokemon(this.pokemonDetail));
    }
  }
}
