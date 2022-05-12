import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrailerModule } from './shared/trailer/trailer.module';
import { ListPokemonModule } from './shared/list-pokemon/list-pokemon.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, TrailerModule, ListPokemonModule],
})
export class HomeModule {}
