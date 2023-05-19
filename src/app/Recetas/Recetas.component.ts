import { Component, OnInit } from '@angular/core';
import { Receta } from './Receta';
import { RecetaService } from './Receta.service';	

@Component({
  selector: 'app-Recetas',
  templateUrl: './Recetas.component.html',
  styleUrls: ['./Recetas.component.css']
})
export class RecetasComponent implements OnInit {
  recetas :Array<Receta> = [];
  selectedBook!: Receta;
  selected = false;

  constructor(private RecetaService: RecetaService) { }

  
  getCourses() {
    this.RecetaService.getRecetas().subscribe(recetas => {
      this.recetas = recetas;
    });
  }
  getRecetasAverage() {
    return (
      this.recetas.reduce((acc, Receta) => acc + Receta.duracion, 0) /
      this.recetas.length
    );
  }

  onSelected(book: Receta): void {
    this.selected = true;
    this.selectedBook = book;
  }

  ngOnInit() {
    this.getCourses();
  }


}
