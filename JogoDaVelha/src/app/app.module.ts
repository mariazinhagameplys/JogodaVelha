import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JogoComponent } from './jogo/jogo.component';
import { FormsModule } from '@angular/forms';
import { TabelaComponent } from './tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
