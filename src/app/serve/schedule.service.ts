import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule.models';
import { AddSchedule } from '../models/addSchedule.models';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  apiUrl: any = 'https://localhost:7109/api/Schedule'
  

  constructor(private http: HttpClient) { }

  getSchedule(userId: string, mouth: string ): Observable<Schedule[]>{
    return this.http.get<Schedule[]>(this.apiUrl+`/all/${userId}?mouth=${mouth}`);
  }

  addSchedule(addSchedule: AddSchedule): Observable<AddSchedule>{
    
    return this.http.post<AddSchedule>(this.apiUrl, addSchedule)
  }

  getScheduleById(id: string): Observable<AddSchedule>{
    return this.http.get<AddSchedule>(this.apiUrl+"/day/"+id)
  }

  updateSchedule(id: string, updateScheduleRequest: AddSchedule): Observable<AddSchedule>{
    return this.http.put<AddSchedule>(this.apiUrl+id, updateScheduleRequest)
  }

  
}
