import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { AnimePageComponent } from './components/anime-page/anime-page.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { WatchComponent } from './components/watch/watch.component';

const routes: Routes = [
    {
      path: "streaming/anime/:anime",
      component: AnimePageComponent,
    },
    {
      path: "streaming/list",
      component: AnimeListComponent,
    },  
    {
      path: "streaming/movies",
      component: MoviesListComponent,
    },   
    {
      path: "streaming/watch/:anime/:season/:episode",
      component: WatchComponent,
    },
    {
      path: "streaming/watch/:movie",
      component: WatchComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamingRoutingModule { }
