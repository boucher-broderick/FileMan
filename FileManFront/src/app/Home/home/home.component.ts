import { Component } from '@angular/core';
import { HomeServiceService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  CurrentPage: number = 0;
  constructor(private homeService: HomeServiceService){  }
  
  ngOnInit(){
    this.homeService.getCurrentPage().subscribe((val)=>{
      this.CurrentPage = val;
    })
  }
}
