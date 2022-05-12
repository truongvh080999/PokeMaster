import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailerComponent } from './trailer.component';
import { CarouselHolderModule } from 'src/app/shared/carousel-holder/carousel-holder.module';

@NgModule({
  declarations: [TrailerComponent],
  imports: [CommonModule, CarouselHolderModule],
  exports: [TrailerComponent],
})
export class TrailerModule {}
