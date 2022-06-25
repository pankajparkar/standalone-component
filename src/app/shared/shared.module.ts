import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ShowtimesComponent } from './showtimes/showtimes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { VerticalBarChartComponent } from './charts/vertical-bar-chart/vertical-bar-chart.component';
import { NumberChartComponent } from './charts/number-chart/number-chart.component';
import { GoldenTextComponent } from './golden-text/golden-text.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';
import { MoviePreviewCardComponent } from './movie-preview-card/movie-preview-card.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { pipes, PipesModule } from '../pipes/pipes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const components = [
    // ShowtimesComponent,
    NavbarComponent,
    FooterComponent,
    VerticalBarChartComponent,
    NumberChartComponent,
    GoldenTextComponent,
    MoviesGridComponent,
    MoviePreviewCardComponent,
    MovieSearchComponent,
];

@NgModule({
    declarations: [
        ...components,
    ],
    imports: [
        ShowtimesComponent,
        CommonModule,
        NgxChartsModule,
        RouterModule,
        ...pipes,
        BrowserAnimationsModule,
    ],
    exports: [
        ...components,
        ShowtimesComponent,
    ]
})
export class SharedModule { }
