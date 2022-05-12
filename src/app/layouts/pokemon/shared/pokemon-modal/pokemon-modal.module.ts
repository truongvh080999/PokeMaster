import { HeightPipe } from './pipes/height.pipe';
import { WeightPipe } from './pipes/weight.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonModalComponent } from './pokemon-modal.component';

@NgModule({
  declarations: [PokemonModalComponent, WeightPipe, HeightPipe],
  imports: [CommonModule],
})
export class PokemonModalModule {}
