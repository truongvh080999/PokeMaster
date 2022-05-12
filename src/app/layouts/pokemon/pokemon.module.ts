import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailModule } from './shared/detail/detail.module';

@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DetailModule,
  ],
})
export class PokemonModule {}
