
import { NgModule } from '@angular/core';
import { JogoComponent } from './jogo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    JogoComponent
  ]
})
export class JogoModule { }