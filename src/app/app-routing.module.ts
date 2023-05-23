import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SheculeMouthComponent } from './components/schedule/shecule-mouth/shecule-mouth.component';
import { EditScheduleComponent } from './components/schedule/edit-schedule/edit-schedule.component';

const routes: Routes = [
  {
    path: 'schedule',
    component: SheculeMouthComponent
  },
  {
    path: 'schedule/edit/:id',
    component: EditScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
