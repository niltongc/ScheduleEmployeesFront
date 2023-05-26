import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule.models';
import { AddSchedule } from '../models/addSchedule.models';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  apiUrlSchedule: string = 'https://localhost:7109/api/Schedule/'
  apiUrlUser: string = 'https://localhost:7109/api/User/'
  

  constructor(private http: HttpClient) { }

  // getSchedule(userId: string, mouth: string ): Observable<Schedule[]>{
  //   return this.http.get<Schedule[]>(this.apiUrlSchedule+`/all/${userId}?mouth=${mouth}`);
  // }
  getSchedule(userId: string): Observable<Schedule[]>{
    return this.http.get<Schedule[]>(this.apiUrlSchedule+`all/${userId}`);
  }

  addSchedule(addSchedule: AddSchedule): Observable<AddSchedule>{
    
    return this.http.post<AddSchedule>('https://localhost:7109/api/Schedule', addSchedule)
  }

  getScheduleById(id: string): Observable<AddSchedule>{
    return this.http.get<AddSchedule>(this.apiUrlSchedule+"day/"+id)
  }

  updateSchedule(id: string, updateScheduleRequest: AddSchedule): Observable<AddSchedule>{
    return this.http.put<AddSchedule>(this.apiUrlSchedule+id, updateScheduleRequest)
  }

  getUser(email:string): Observable<any>{
    return this.http.get<any>(this.apiUrlUser+email)
  }

  
}
