import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../../../core/services/tvmaze.service';
import { Show } from '../../../models/show.model';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show: Show | null = null;
  loading = true;

  constructor(private tvmaze: TvmazeService) {}

  ngOnInit(): void {
    this.tvmaze.getShow().subscribe({
      next: (data: Show) => { this.show = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
