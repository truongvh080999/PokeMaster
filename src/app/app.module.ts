import { ReusableService } from './services/api/reusable.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './shared/header/header.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
  ],
  providers: [ReusableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
