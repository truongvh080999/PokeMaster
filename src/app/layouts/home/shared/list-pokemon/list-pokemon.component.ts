import { ReusableService } from './../../../../services/api/reusable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {
  listPokemon: { name: string; url: string }[] = [];
  filter = {
    offset: 0,
    limit: 10,
  };
  constructor(private reusableService: ReusableService) {}

  ngOnInit(): void {
    this.getListPokemon();
  }
  getListPokemon() {
    this.reusableService.getMethod('pokemon', this.filter).subscribe((res) => {
      this.listPokemon = [...this.listPokemon, ...res.results];
      this.filter.offset = this.listPokemon.length;
    });
  }
}
