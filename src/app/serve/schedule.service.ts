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

  getSchedule(): Observable<Schedule[]>{
    return this.http.get<Schedule[]>(this.apiUrl+'/all/1?mouth=5');
  }

  addSchedule(addSchedule: AddSchedule): Observable<AddSchedule>{
    // addSchedule.id = 0
    return this.http.post<AddSchedule>('https://localhost:7109/api/Schedule', addSchedule)
  }
}
