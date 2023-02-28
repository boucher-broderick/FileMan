import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { HomeServiceService } from '../home.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items!: MenuItem[];

  constructor(private homeService: HomeServiceService){

  }

  changeScreen(pageNumber: number){
    this.homeService.setCurrentPage(pageNumber);
  }

}
