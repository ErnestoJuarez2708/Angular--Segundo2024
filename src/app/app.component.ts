import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject} from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { NotificationComponent } from './notification/notification.component';
import { data, socialNetworks } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, CommonModule, UserComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  youtube$ = new BehaviorSubject<string>('youtube added a new video');
  tiktok$ = new BehaviorSubject<string>('tiktok added a new video');
  instagram$ = new BehaviorSubject<string>('instagram added a new story');
  facebook$ = new BehaviorSubject<string>('facebook added a new story');
  whatsapp$ = new BehaviorSubject<string>('whatsapp sent a new message');
  users = data;

  addNewVideo(platform: string) {
    const notification = `${platform} added a new video/story/message`;

    
    const platformId = socialNetworks.find(net => net.platform === platform)?.id;

    if (platformId) {
      this.users.forEach(user => {
        if (user.subscriptions.includes(platformId)) {
          if ((platform === 'tiktok' || platform === 'whatsapp') && user.subscriptionType === 'premium') {
            if (user.amountAvailable >= 5) {
              user.amountAvailable -= 5;
              user.notifications.push(notification);
            } else {
              console.log(`User ${user.name} does not have enough funds.`);
            }
          } else if (platform !== 'tiktok' && platform !== 'whatsapp') {
            user.notifications.push(notification);
          }
        }
      });
    }
  }
}
