import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project } from 'src/app/Demo/Interface/project';
import { CustomResponse } from '../../../Interface/customResponse';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  appState$!: Observable<CustomResponse>;
  test!: string;
  projects!: Project[];


    constructor(private service: ProjectsService){
      
    }

    ngOnInit(){
      this.service.getProjects().subscribe((value: any)=>{
        this.projects= value;
        console.log(value);
      })

    }
}
