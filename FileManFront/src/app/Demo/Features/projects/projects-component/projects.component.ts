import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project, ProjectExport } from 'src/app/Demo/Interface/project';
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
  projects: Project[] = [];


    constructor(private service: ProjectsService){
      this.projects =[{id:1, name:"bob", description: "bob"}]
    }

    ngOnInit(){ 
      //                        | curser for the error is in between . and s line 24
      // this.service.getProjects().subscribe((value: Project[])=>{
      //   this.projects= value;
      //   console.log(value);             //line 26
      //   console.log( typeof(value));    //line 27
      //   console.log(this.projects);     //line 28
      // })
    }

    createProj(){
      var temp: ProjectExport = {name: "nasdfasd", description: "this be the desc", createdBy: "sdfasdf"};
      this.service.createProjects(temp);
    }
}
