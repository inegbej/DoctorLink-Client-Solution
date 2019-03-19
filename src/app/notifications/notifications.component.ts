import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  private _notificationUrl = 'http://localhost:49166/api/notifications';

  notifications: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.refreshNotifications();
  }

  refreshNotifications() {
    this.http.get(this._notificationUrl)
    .subscribe(response => {
      this.notifications = response;
    }, error => {
      console.log(error);
    });
  }

}
