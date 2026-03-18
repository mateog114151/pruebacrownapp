import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../../../core/services/tvmaze.service';
import { ShowImage } from '../../../models/image.model';

@Component({
  standalone: false,
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: ShowImage[] = [];
  selectedType = 'all';
  types = ['all', 'poster', 'banner', 'background'];
  loading = true;

  constructor(private tvmaze: TvmazeService) {}

  ngOnInit(): void {
    this.tvmaze.getImages().subscribe({
      next: (data: ShowImage[]) => { this.images = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  get filteredImages(): ShowImage[] {
    return this.selectedType === 'all'
      ? this.images
      : this.images.filter(i => i.type === this.selectedType);
  }
}
