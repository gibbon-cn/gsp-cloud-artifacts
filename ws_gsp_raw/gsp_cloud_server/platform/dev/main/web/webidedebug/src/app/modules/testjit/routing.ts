import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { testjitComponent } from './component';

const routes: Routes = [
  { path: '', component: testjitComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class testjitRoutingModule {}
