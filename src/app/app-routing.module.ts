import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'episodes', loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesModule) },
  { path: 'cast', loadChildren: () => import('./pages/cast/cast.module').then(m => m.CastModule) },
  { path: 'gallery', loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
