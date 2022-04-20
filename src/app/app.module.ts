import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlacesComponent } from './pages/places/places.component';
import { RestaurentsComponent } from './pages/restaurents/restaurents.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { MarketPlaceComponent } from './pages/market-place/market-place.component';
import { MyPlanComponent } from './pages/my-plan/my-plan.component';
import { MyFavotitesComponent } from './pages/my-favotites/my-favotites.component';
import { AboutComponent } from './pages/about/about.component';
import { Page404Component } from './pages/page404/page404.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlacesComponent,
    RestaurentsComponent,
    RecommendationsComponent,
    MarketPlaceComponent,
    MyPlanComponent,
    MyFavotitesComponent,
    AboutComponent,
    Page404Component,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
