import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project, ProjectExport, ProjectTable } from 'src/app/Demo/Module/project';
import { CustomResponse } from '../../../Module/customResponse';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  appState$!: Observable<CustomResponse>;
  test!: string;
  projects: ProjectTable[] = [];
  load: boolean = true;


    constructor(private service: ProjectsService, private _router: Router){


       this.projects = [{
        checked: false,
        pid: 11123,
        name: "RCOS",
        description: "This is a sample project.",
        createdBy: "Brody Boucher",
        createdDate: new Date("4/01/2023"),
        accessKey: "12312"
       },
       {
        checked: false,
        pid: 111223,
        name: "Elephants",
        description: "This is a second sample project. It is also epic",
        createdBy: "Yotham Sage",
        createdDate: new Date("4/2/2023"),
        accessKey: "123212"
       },
       {
        checked: false,
        pid: 87823,
        name: "Homosapiens",
        description: "This is a sample project. Epic",
        createdBy: "Lauren Voight",
        createdDate: new Date("4/04/2023"),
        accessKey: "12312"
       }
      ]


     setTimeout(()=>{
        this.load=false;
      }, 2500);
    }

    ngOnInit(){ 

      //  this.service.getProjects().subscribe((value: Project[])=>{
      //    this.projects= value.map( function(val){
      //     let temp: ProjectTable = {
      //       checked: false,
      //       pid: val.pid,
      //       name: val.name,
      //       description: val.description,
      //       createdBy: val.createdBy,
      //       createdDate: val.createdDate,
      //       accessKey: val.accessKey
      //     }
      //     return temp;
      //    });

      //    console.log(this.projects);     //line 28
       //})



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

    gotofiles(){
      this._router.navigate([`demo/files`])
    }

}
