
import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
  
@Component({
    templateUrl: './addProjectPopUp.html',
})
export class TutorialDemo {
    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ) { }
  
    ngOnInit() { }
}