import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../../../core/services/tvmaze.service';
import { CastMember } from '../../../models/cast.model';

@Component({
  standalone: false,
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {
  cast: CastMember[] = [];
  loading = true;

  constructor(private tvmaze: TvmazeService) {}

  ngOnInit(): void {
    this.tvmaze.getCast().subscribe({
      next: (data: CastMember[]) => { this.cast = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
