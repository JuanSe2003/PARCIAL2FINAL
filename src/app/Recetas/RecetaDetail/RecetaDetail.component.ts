import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../Receta';

@Component({
  selector: 'app-RecetaDetail',
  templateUrl: './RecetaDetail.component.html',
  styleUrls: ['./RecetaDetail.component.css']
})
export class RecetaDetailComponent implements OnInit {
  @Input () RecetaDetail!: Receta;

  constructor() { }

  ngOnInit() {
  }

}
