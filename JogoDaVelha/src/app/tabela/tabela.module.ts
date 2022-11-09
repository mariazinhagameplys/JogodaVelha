import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabelaComponent } from './tabela.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TabelaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TabelaComponent
  ]
})
export class TabelaModule { }