import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss'],
})
export class PokemonModalComponent implements OnInit {
  @Input() pokemonDetail: any;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.pokemonDetail);
  }
}
