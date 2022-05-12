import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgbModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
