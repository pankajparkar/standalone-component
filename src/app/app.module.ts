import { InMemoryDataService } from './services/in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DatabaseService } from './services/database.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HomeComponent } from './components/home/home.component';

import { PipesModule } from './pipes/pipes.module'

import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesSliderComponent } from './components/movies-slider/movies-slider.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ManageShowtimesComponent } from './components/manage-showtimes/manage-showtimes.component';
import { MovieDetailsCardComponent } from './components/movie-details-card/movie-details-card.component';
import { SharedModule } from './shared/shared.module';

// import { ShowtimesComponent } from './shared/showtimes/showtimes.component';
// import { NavbarComponent } from './shared/navbar/navbar.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { VerticalBarChartComponent } from './shared/charts/vertical-bar-chart/vertical-bar-chart.component';
// import { NumberChartComponent } from './shared/charts/number-chart/number-chart.component';
// import { GoldenTextComponent } from './shared/golden-text/golden-text.component';
// import { MoviesGridComponent } from './shared/movies-grid/movies-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    HomeComponent,
    MoviesListComponent,
    MoviesSliderComponent,
    DashboardComponent,
    CollectionComponent,
    ManageShowtimesComponent,
    MovieDetailsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    PipesModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CarouselModule.forRoot(),
    SharedModule,
    PipesModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
