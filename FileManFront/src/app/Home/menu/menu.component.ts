import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { HomeServiceService } from '../home.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items!: MenuItem[];

  constructor(private homeService: HomeServiceService, private router: Router){

  }

  changeScreen(pageNumber: number){
    this.homeService.setCurrentPage(pageNumber);
  }

  viewDemo() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/Login`])
    );
  
    window.open(url, '_blank')
  }

 



}
