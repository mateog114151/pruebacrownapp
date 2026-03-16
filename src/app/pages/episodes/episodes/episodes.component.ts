import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../../../core/services/tvmaze.service';
import { Episode } from '../../../models/episode.model';

@Component({
  standalone: false,
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes: Episode[] = [];
  seasons: number[] = [];
  selectedSeason = 1;
  loading = true;

  constructor(private tvmaze: TvmazeService) {}

  ngOnInit(): void {
    this.tvmaze.getEpisodes().subscribe({
      next: (data: Episode[]) => {
        this.episodes = data;
        this.seasons = [...new Set(data.map(e => e.season))];
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  get filteredEpisodes(): Episode[] {
    return this.episodes.filter(e => e.season === this.selectedSeason);
  }
}
