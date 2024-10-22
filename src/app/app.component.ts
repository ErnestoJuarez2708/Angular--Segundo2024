import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject} from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, CommonModule, UserComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedUserId = '1';
  selectedTab = 'notifications';

  youtube$ = new BehaviorSubject<string>('youtube added a new video');
  tiktok$ = new BehaviorSubject<string>('tiktok added a new video');
  instagram$ = new BehaviorSubject<string>('instagram added a new story');
  facebook$ = new BehaviorSubject<string>('facebook added a new story');
  whatsapp$ = new BehaviorSubject<string>('whatsapp sent a new message');

  addNewVideo(platform: string) {
    switch (platform) {
      case 'youtube':
        this.youtube$.next('youtube added a new video');
        break;
      case 'tiktok':
        this.tiktok$.next('tiktok added a new video');
        break;
      case 'instagram':
        this.instagram$.next('instagram added a new story');
        break;
      case 'facebook':
        this.facebook$.next('facebook added a new story');
        break;
      case 'whatsapp':
        this.whatsapp$.next('whatsapp sent a new message');
        break;
    }
  }
}
