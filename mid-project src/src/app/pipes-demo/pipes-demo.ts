import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-demo.html',
  styleUrls: ['./pipes-demo.css']
})
export class PipesDemo {
  // Brand & Time
  dashboardTitle: string = 'quantum network analytics';
  lastRefresh = new Date();

  // Financials
  accountValue: number = 12450.75;
  yieldRate: number = 0.0825;

  // Inventory
  nodes = ["Alpha-Node", "Beta-Gate", "Gamma-Link", "Delta-Shield", "Epsilon-Core"];

  // Human-readable System Info (formerly the JSON object)
  networkDetails = {
    location: 'Satellite-Link 7',
    mode: 'Encryption-Active',
    integrity: 0.9998,
    ping: '14ms'
  };

  time$ = interval(1000).pipe(map(() => new Date()));
}
