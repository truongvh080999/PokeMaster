import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon.component';
import { PokemonModule } from './shared/pokemon/pokemon.module';

@NgModule({
  declarations: [ListPokemonComponent],
  imports: [CommonModule, PokemonModule],
  exports: [ListPokemonComponent],
})
export class ListPokemonModule {}
