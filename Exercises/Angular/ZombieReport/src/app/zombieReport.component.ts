import { Component } from '@angular/core';
import { PersonStatus } from './entities/PersonStatus'
import { PersonStatusService } from './services/PersonStatusService'

@Component({
  selector: 'zombieReport',
  templateUrl: './zombieReport.component.html',
  styleUrls: ['./zombieReport.component.css']
})
export class ZombieReportComponent {
  public title:string = 'Zombie Status Report';
  public allStatuses:PersonStatus[] = [];
  public statuses:PersonStatus[] = [];
  public filter:string = '';

  public constructor(personStatusService: PersonStatusService) {
    personStatusService.getAll().subscribe(result => {
      for (let status of result) {
        this.allStatuses.push(status);
      }

      this.statuses = this.allStatuses;
    }, error => { 
      console.log(error)
    });
    /*
    this.statuses = [
      {firstName:'Tom',lastName:'Masters',statusId:4,statusDescription:'Unknown'},
      {firstName:'Bob',lastName:'Masters',statusId:2,statusDescription:'Zombie'},
      {firstName:'John',lastName:'Masters',statusId:1,statusDescription:'Alive'},
      {firstName:'Joe',lastName:'Masters',statusId:3,statusDescription:'Dead'},
      {firstName:'Steve',lastName:'Masters',statusId:2,statusDescription:'Zombie'}     
    ];
    */
  }

  public onSearchTextChanged():void {
    if(this.filter.length > 0) {
      this.statuses = this.allStatuses.filter(personStatus => 
        `${personStatus.firstName} ${personStatus.lastName}`.indexOf(this.filter) >= 0);
    }
    else {
      this.statuses = this.allStatuses;
    }
  }
}
