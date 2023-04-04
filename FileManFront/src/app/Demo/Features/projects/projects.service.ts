import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { CustomResponse } from '../../Module/customResponse';
import { Project, ProjectExport } from '../../Module/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
 
  private readonly apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {  }

  public getProjects(): Observable<any>{
    return this.http.get<CustomResponse>(`${this.apiUrl}/project/getProjects`)
  .pipe(map(data => {
    console.log(data)
    return data.data.projects;
   } )
  )
}

public createProjects(project: ProjectExport){
  console.log("started");
  this.http.post(`${this.apiUrl}/project/createProject`, project).subscribe( (val)=>
  console.log(val));

console.log("ended");
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
