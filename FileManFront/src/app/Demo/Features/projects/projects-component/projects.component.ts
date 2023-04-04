import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project, ProjectExport } from 'src/app/Demo/Module/project';
import { CustomResponse } from '../../../Module/customResponse';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  appState$!: Observable<CustomResponse>;
  test!: string;
  projects: Project[] = [];


    constructor(private service: ProjectsService){
     
    }

    ngOnInit(){ 

       this.service.getProjects().subscribe((value: Project[])=>{
         this.projects= value;
         console.log(value);             //line 26
         console.log( typeof(value));    //line 27
         console.log(this.projects);     //line 28
       })
    }

    createProj(){
      var temp: ProjectExport = {name: "nasdfasd", description: "this be the desc", createdBy: "sdfasdf"};
      this.service.createProjects(temp);
    }
}
