import { Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import { LoginDetails } from './loginDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'app';
  allDetails : LoginDetails[];
  status : string;

  constructor(private appService: AppService) { }

  ngOnInit() : void {
    this.getAllDetails();
  }


  getAllDetails() {
    this.appService.getAllDetails()
     .subscribe(
                data => this.allDetails = data,
                error => this.status = error);   
   }
}
