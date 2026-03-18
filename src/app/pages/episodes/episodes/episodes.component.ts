import { Component, OnInit, HostListener } from '@angular/core';
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
  selectedEpisode: Episode | null = null;

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

  openModal(episode: Episode): void {
    this.selectedEpisode = episode;
    document.body.style.overflow = 'hidden';
  }

  closeModal(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    // Close when clicking the overlay or the close button
    if (target.classList.contains('modal-overlay') || target.classList.contains('modal__close')) {
      this.selectedEpisode = null;
      document.body.style.overflow = '';
    }
  }

  @HostListener('document:keydown.escape')
  onEscKey(): void {
    if (this.selectedEpisode) {
      this.selectedEpisode = null;
      document.body.style.overflow = '';
    }
  }
}