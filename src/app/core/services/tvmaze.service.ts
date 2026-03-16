import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show }       from '../../models/show.model';
import { Episode }    from '../../models/episode.model';
import { CastMember } from '../../models/cast.model';
import { ShowImage }  from '../../models/image.model';

@Injectable({ providedIn: 'root' })
export class TvmazeService {
  private base = 'https://api.tvmaze.com';
  private id   = 3594;

  constructor(private http: HttpClient) {}

  getShow(): Observable<Show> {
    return this.http.get<Show>(`${this.base}/shows/${this.id}`);
  }

  getEpisodes(): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${this.base}/shows/${this.id}/episodes`);
  }

  getCast(): Observable<CastMember[]> {
    return this.http.get<CastMember[]>(`${this.base}/shows/${this.id}/cast`);
  }

  getImages(): Observable<ShowImage[]> {
    return this.http.get<ShowImage[]>(`${this.base}/shows/${this.id}/images`);
  }
}
