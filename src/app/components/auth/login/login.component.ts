import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from 'src/app/serve/schedule.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private scheduleService: ScheduleService, private router: Router){}

  @Output() loginEvent: EventEmitter<any> = new EventEmitter<any>();

  email: string = '';
  sendUser() {
    
    this.scheduleService.getUser(this.email)
    .subscribe({
      next: (user) => {
      console.log(user)
      this.loginEvent.emit(user) 
      this.router.navigate(['/schedule'])
      }
    })
  }

  onGetInputValue(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  


}
