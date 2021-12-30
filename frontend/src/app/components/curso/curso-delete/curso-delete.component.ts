import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso.model';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-delete',
  templateUrl: './curso-delete.component.html',
  styleUrls: ['./curso-delete.component.css']
})
export class CursoDeleteComponent implements OnInit {

  curso!: Curso

  constructor( 
    private cursoService: CursoService, 
    private router: Router, 
    private route: ActivatedRoute 
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.cursoService.readById(id!).subscribe(curso => {
      this.curso = curso
    })
  }

  deleteCurso(): void {
    this.cursoService.delete(`${this.curso.id}`).subscribe( ( ) => {
      this.cursoService.showMessage('Curso deletado com sucesso!');
      this.router.navigate(['/cursos'])

    } )
  }

  cancel(): void {
    this.router.navigate(['/cursos'])
  }

}
