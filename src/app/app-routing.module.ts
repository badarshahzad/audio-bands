import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GenresComponent } from './genres/genres.component';
import { YearsComponent } from './years/years.component';
import { AlbumdetailComponent } from './albumdetail/albumdetail.component';
const routes: Routes = [

  {
    path: '',
    component: LayoutsComponent,
    data: {
      title: 'Bands'
    },
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'albums', component: AlbumsComponent, },
      { path: 'artists', component: ArtistsComponent, },
      { path: 'about', component: AboutComponent, },
      { path: 'contactus', component: ContactusComponent, },
      { path: 'genres', component: GenresComponent, },
      { path: 'years', component: YearsComponent, },

       { path: 'albumdetail', component: AlbumdetailComponent, },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
