import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasComponent } from './Recetas.component';
import { RecetaDetailComponent } from './RecetaDetail/RecetaDetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecetasComponent,RecetaDetailComponent],
  exports: [RecetasComponent]
})
export class RecetasModule { }
