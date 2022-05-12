import { PokemonModalComponent } from './../pokemon-modal/pokemon-modal.component';
import { ReusableService } from './../../../../../../services/api/reusable.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }
  getPokemon() {
    const pokemonUrlSplit = this.pokemon.url.split('/');
    const pokemonId = pokemonUrlSplit[pokemonUrlSplit.length - 2];
    this.reusableService.getMethod(`pokemon/${pokemonId}`).subscribe((res) => {
      this.pokemonDetail = { ...res };
    });
  }
  showModal() {
    const modalRef = this.modalService.open(PokemonModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.pokemonDetail = this.pokemonDetail;
  }
}
