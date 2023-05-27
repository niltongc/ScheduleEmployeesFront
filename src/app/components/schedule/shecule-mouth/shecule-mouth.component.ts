import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSchedule } from 'src/app/models/addSchedule.models';
import { Schedule } from 'src/app/models/schedule.models';
import { ScheduleService } from 'src/app/serve/schedule.service';


@Component({
  selector: 'app-shecule-mouth',
  templateUrl: './shecule-mouth.component.html',
  styleUrls: ['./shecule-mouth.component.css']
})
export class SheculeMouthComponent {

  loading = true;

  userResponse: any;

  schedules: Schedule[] = []

  closeResult = '';
  selectedDate: any = [];

  addScheduleRequest: AddSchedule = {
    id: 0,
    dateCheck: Date.UTC,
    userId: 0
  }

  constructor(private scheduleService: ScheduleService, private router: Router, private modalService: NgbModal){}

  ngOnInit(): void {
    
  }

  onGetUserEvent(userResponse: any) { 
    this.userResponse = userResponse;
    this.login(`${userResponse.id}`);
    this.loading = false;
  }

  login(userId: any){
    
    this.scheduleService.getSchedule(userId)
      .subscribe({
        next: (schedules) => {
          console.log(schedules)
          this.schedules = schedules;
        },
        error: (response) => {
          console.log(response)
        }
      })
  }

  createIn(){
    
    this.addScheduleRequest.userId = this.userResponse.id;
    console.log(this.userResponse)
    console.log(this.addScheduleRequest)
    this.scheduleService.addSchedule(this.addScheduleRequest)
    .subscribe({
      next: (schedule: any) => {
        console.log('certo')
        console.log(this.addScheduleRequest)
        this.login(this.addScheduleRequest.userId)
      }
    })
  }

  open(content: any, date: any) {
    
    this.selectedDate = date;
    
    console.log(this.selectedDate)
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
        
        
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

 

  
}
