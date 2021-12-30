import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso.model';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-read',
  templateUrl: './curso-read.component.html',
  styleUrls: ['./curso-read.component.css']
})
export class CursoReadComponent implements OnInit {

  curso!: Curso[];
  displayedColumns = ['id', 'name' ]

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.read().subscribe( cursos => {
      this.cursos = cursos
      console.log(cursos)
    })
  }

}
