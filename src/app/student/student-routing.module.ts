import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {
    path: '',
    component: ScoreComponent
  },
  {
    path: 'classmate',
    loadComponent: () => import('./classmate/classmate.component').then(m => m.ClassmateComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
