import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';

@NgModule({
  declarations: [PokemonComponent],
  imports: [CommonModule],
  exports: [PokemonComponent],
})
export class PokemonModule {}
