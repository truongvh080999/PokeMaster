import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './carousel-holder.component';

@NgModule({
  declarations: [CarouselHolderComponent],
  imports: [CommonModule, CarouselModule],
  exports: [CarouselHolderComponent],
})
export class CarouselHolderModule {}
