import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { CustomResponse } from '../../Interface/customResponse';
import { Project } from '../../Interface/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
 
  private readonly apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {  }

  public getProjects(): Observable<Project[]>{
    return this.http.get<CustomResponse>(`${this.apiUrl}/project/list`)
    .pipe(
      map((response: CustomResponse) => {
        return response.data;
      })

    )
  }
  

  save$ = (project: Project) => <Observable<CustomResponse>>
   this.http.post<CustomResponse>(`${this.apiUrl}/project/save`, project)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  )


  delete$ = (projectId: number ) => <Observable<CustomResponse>>
   this.http.delete<CustomResponse>(`${this.apiUrl}/project/delete/${projectId}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  )


  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    throw new Error('Error occured');
  }
}
