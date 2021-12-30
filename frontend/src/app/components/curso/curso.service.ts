import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Curso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  baseUrl = "http://localhost:8081/cursos"

  constructor( private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.baseUrl, curso)
  }

  read(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.baseUrl)
  }

  readById(id: string): Observable<Curso> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Curso>(url)
  }

  update(curso: Curso): Observable<Curso> {
    const url = `${this.baseUrl}/${curso.id}`
    return this.http.put<Curso>(url, curso)
  }

  delete(id: string): Observable<Curso> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Curso>(url)
  }
}
