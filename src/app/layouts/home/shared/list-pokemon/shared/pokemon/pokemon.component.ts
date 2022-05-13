import { PokemonModalComponent } from './../pokemon-modal/pokemon-modal.component';
import { ReusableService } from './../../../../../../services/api/reusable.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { LoadPokemon } from '../../store';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!: { name: string; url: string };
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
    this.store.dispatch(new LoadPokemon(this.pokemonDetail));
  }
}
