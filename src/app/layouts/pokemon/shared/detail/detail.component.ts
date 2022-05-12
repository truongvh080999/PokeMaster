import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReusableService } from 'src/app/services/api/reusable.service';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';

@Component({
  selector: 'pokemon',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
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
