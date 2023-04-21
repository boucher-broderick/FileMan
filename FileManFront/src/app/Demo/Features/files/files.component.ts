import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project, ProjectExport, ProjectTable } from 'src/app/Demo/Module/project';
import { CustomResponse } from '../../Module/customResponse';



@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {



  appState$!: Observable<CustomResponse>;
  test!: string;
  projects: ProjectTable[] = [];
  load: boolean = true;


    constructor(){


       this.projects = [{
        checked: false,
        pid: 11123,
        name: "Database.xlsx",
        description: "The Database used for the project",
        createdBy: "Brody Boucher",
        createdDate: new Date("4/06/2023"),
        accessKey: "RCOS"
       },
       {
        checked: false,
        pid: 111223,
        name: "Anatomy.png",
        description: "The anatomy of a adult elephant",
        createdBy: "Yotham Sage",
        createdDate: new Date("4/5/2023"),
        accessKey: "Elephants"
       },
       {
        checked: false,
        pid: 87823,
        name: "Timeline.png",
        description: "Picture of the timeline of humans",
        createdBy: "Lauren Voight",
        createdDate: new Date("4/07/2023"),
        accessKey: "Homosapiens"
       },
       {
        checked: false,
        pid: 11123,
        name: "SampleScreen.png",
        description: "This is a sample screen for the file page.",
        createdBy: "Brody Boucher",
        createdDate: new Date("4/05/2023"),
        accessKey: "RCOS"
       },
       {
        checked: false,
        pid: 111223,
        name: "Homework1.docx",
        description: "Homework 1, history of elephants",
        createdBy: "Yotham Sage",
        createdDate: new Date("4/7/2023"),
        accessKey: "Elephants"
       },
       {
        checked: false,
        pid: 87823,
        name: "Thesis",
        description: "Final Senior Thesis",
        createdBy: "Lauren Voight",
        createdDate: new Date("4/08/2023"),
        accessKey: "Homosapiens"
       },
       {
        checked: false,
        pid: 11123,
        name: "RCOSSlides.pptx",
        description: "Presentation",
        createdBy: "Brody Boucher",
        createdDate: new Date("4/08/2023"),
        accessKey: "RCOS"
       }
      ]


     setTimeout(()=>{
        this.load=false;
      }, 2500);
    }

    ngOnInit(){ 


    }

    createProj(){
      var temp: ProjectExport = {name: "nasdfasd", description: "this be the desc", createdBy: "sdfasdf"};
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
