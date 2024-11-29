import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  imports :[NgFor,NgIf ]
})

export class ContentComponent {
  placeholderImage = 'assets/placeholder.png';
  showSortOptions = false;

  items = [
    { pk: 987, name: 'Reward Name', points: 150, display_img_url:'assets/notification-icon.png'  , quantity: 14, valid_until: '2024-12-31T00:00:00', low_quantity: 10 },
    { pk: 988, name: 'Demo Reward', points: 200, display_img_url: 'assets/content/reward2.avif', quantity: 3, valid_until: '2024-12-31T00:00:00', low_quantity: 10 },
    { pk: 989, name: 'Purchase Reward', points: 300, display_img_url: 'assets/content/reward4.avif', quantity: 0, valid_until: '2024-12-31T00:00:00', low_quantity: 10 },
    { pk: 990, name: 'Sales Reward', points: 300, display_img_url: './assets/content/reward3.avif', quantity: 0, valid_until: '2024-12-31T00:00:00', low_quantity: 10 },
  ];

  toggleSort() {
    this.showSortOptions = !this.showSortOptions;
  }

  sortItems(order: 'asc' | 'desc') {
    this.items.sort((a, b) => {
      if (order === 'asc') return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    });
  }
}