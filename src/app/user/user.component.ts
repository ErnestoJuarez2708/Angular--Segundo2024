import { Component, Input } from '@angular/core';
import { data, socialNetworks } from '../data';  // Assuming these are the files you've provided
import { CommonModule } from '@angular/common';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NotificationComponent], 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() userId!: string;
  user: any;
  availableSocialNetworks = socialNetworks;
  selectedTab = 'notifications'; // Simulando el tab seleccionado


  ngOnInit() {
    this.user = data.find(u => u.user_id === this.userId);
  }

  getPlatformName(id: number) {
    return this.availableSocialNetworks.find(net => net.id === id)?.platform;
  }

  addSubscription(id: number) {
    if (!this.user.subscriptions.includes(id)) {
      this.user.subscriptions.push(id);
    }
  }

  removeSubscription(sub: number) {
    this.user.subscriptions = this.user.subscriptions.filter((subscription: number) => subscription !== sub);
  }
  
  closeAccount() {
    console.log('Account closed for user: ' + this.user.name);
  }
}
