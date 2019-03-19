import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'notifications', component: NotificationsComponent }
    ]),
    CommonModule
  ]
})
export class NotificationsModule { }
