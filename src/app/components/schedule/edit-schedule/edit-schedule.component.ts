import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AddSchedule } from 'src/app/models/addSchedule.models';
import { ScheduleService } from 'src/app/serve/schedule.service';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent {

  scheduleDetails: AddSchedule = {
    id: 0,
    dateCheck: Date.UTC,
    
    userId: 0
  }
  constructor(private route: ActivatedRoute, private scheduleService: ScheduleService, private router: Router){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.scheduleService.getScheduleById(id)
          .subscribe({
            next: (response) => {
              this.scheduleDetails = response;
            }
          })
        }
      }
    })
  }

  updateScheduleLog(){
    this.scheduleService.updateSchedule(this.scheduleDetails.id.toString(), this.scheduleDetails)
    .subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['schedule'])
        
      },
      error: (err) => {
        console.log(err)
        console.log("deu erro")
        
      }
    })
  }

}
