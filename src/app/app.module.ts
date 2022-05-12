import { PokemonModalModule as PokeModal } from './layouts/pokemon/shared/pokemon-modal/pokemon-modal.module';
import { PokemonModalModule } from './layouts/home/shared/list-pokemon/shared/pokemon-modal/pokemon-modal.module';
import { ReusableService } from './services/api/reusable.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './shared/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './shared/footer/footer.module';
import { HomeModule } from './layouts/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonModule } from './layouts/pokemon/pokemon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    FooterModule,
    HomeModule,
    BrowserAnimationsModule,
    PokemonModalModule,
    PokemonModule,
    PokeModal,
  ],
  providers: [ReusableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
