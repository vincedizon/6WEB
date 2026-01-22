import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('HTTP Client Programming');


  httpusers: User[] = [];
  httpposts: any[] = [];

  constructor(private httpService: Httpclient) {}

  ngOnInit(): void {

    this.httpService.getUsers().subscribe((data) => {

      this.httpusers = data.slice(0, 5);
    });


    this.httpService.getPosts().subscribe((data) => {
      this.httpposts = data.slice(0, 5);
    });
  }
}
