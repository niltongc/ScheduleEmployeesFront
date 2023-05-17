import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddSchedule } from 'src/app/models/addSchedule.models';
import { Schedule } from 'src/app/models/schedule.models';
import { ScheduleService } from 'src/app/serve/schedule.service';

@Component({
  selector: 'app-shecule-mouth',
  templateUrl: './shecule-mouth.component.html',
  styleUrls: ['./shecule-mouth.component.css']
})
export class SheculeMouthComponent {

  schedules: Schedule[] = []
  isLogin = true;
  selectedGender: boolean = true;

  addScheduleRequest: AddSchedule = {
    id: 0,
    dateCheck: Date.UTC,
    isLogin: true,
    userId: 1
  }

  constructor(private scheduleService: ScheduleService, private router: Router){}

  ngOnInit():void{
    this.scheduleService.getSchedule()
    .subscribe({
      next: (schedules) => {
        console.log(schedules)
        console.log(typeof(schedules))
        this.schedules = schedules;

      },
      error: (response) => {
        console.log(response)
        
      }
    })
  }

  createIn(){
    this.scheduleService.addSchedule(this.addScheduleRequest)
    .subscribe({
      next: (schedule) => {
        this.router.navigate(['schedule'])
        console.log('certo')
      }
    })
  }

  createOut(){
    this.addScheduleRequest.isLogin = false;
    this.scheduleService.addSchedule(this.addScheduleRequest)
    .subscribe({
      next: (schedule) => {
        console.log(this.addScheduleRequest)
        this.router.navigate(['schedule'])
        console.log('certo')
      }
    })
  }

  
}
