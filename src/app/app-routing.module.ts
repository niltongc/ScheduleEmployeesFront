import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SheculeMouthComponent } from './components/schedule/shecule-mouth/shecule-mouth.component';

const routes: Routes = [
  {
    path: 'schedule',
    component: SheculeMouthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
