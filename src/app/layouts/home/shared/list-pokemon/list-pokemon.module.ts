import { NgxsModule } from '@ngxs/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon.component';
import { PokemonModule } from './shared/pokemon/pokemon.module';
import { HomePokemonState } from './store';

@NgModule({
  declarations: [ListPokemonComponent],
  imports: [
    CommonModule,
    PokemonModule,
    NgxsModule.forFeature([HomePokemonState]),
  ],
  exports: [ListPokemonComponent],
})
export class ListPokemonModule {}
