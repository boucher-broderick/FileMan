import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project, ProjectExport, ProjectTable } from 'src/app/Demo/Module/project';
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
  projects: ProjectTable[] = [];


    constructor(private service: ProjectsService){
     
    }

    ngOnInit(){ 

       this.service.getProjects().subscribe((value: Project[])=>{
         this.projects= value.map( function(val){
          let temp: ProjectTable = {
            checked: false,
            pid: val.pid,
            name: val.name,
            description: val.description,
            createdBy: val.createdBy,
            createdDate: val.createdDate,
            accessKey: val.accessKey
          }
          return temp;
         });

         console.log(this.projects);     //line 28
       })
    }

    createProj(){
      var temp: ProjectExport = {name: "nasdfasd", description: "this be the desc", createdBy: "sdfasdf"};
      this.service.createProjects(temp);
    }

    selectAll(){
      this.projects= this.projects.map( function(val){
        let temp: ProjectTable = {
          checked: true,
          pid: val.pid,
          name: val.name,
          description: val.description,
          createdBy: val.createdBy,
          createdDate: val.createdDate,
          accessKey: val.accessKey
        }
        return temp;
       });
    }

    unselectAll(){
      this.projects= this.projects.map( function(val){
        let temp: ProjectTable = {
          checked: false,
          pid: val.pid,
          name: val.name,
          description: val.description,
          createdBy: val.createdBy,
          createdDate: val.createdDate,
          accessKey: val.accessKey
        }
        return temp;
       });
    }

}
