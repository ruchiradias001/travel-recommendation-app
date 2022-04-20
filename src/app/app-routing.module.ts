import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MarketPlaceComponent } from './pages/market-place/market-place.component';
import { MyFavotitesComponent } from './pages/my-favotites/my-favotites.component';
import { MyPlanComponent } from './pages/my-plan/my-plan.component';
import { Page404Component } from './pages/page404/page404.component';
import { PlacesComponent } from './pages/places/places.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { RestaurentsComponent } from './pages/restaurents/restaurents.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"/places",
    component:PlacesComponent
  },
  {
    path:"/restaurents",
    component:RestaurentsComponent
  },
  {
    path:"/recommendations",
    component:RecommendationsComponent
  },
  {
    path:"/market-place",
    component:MarketPlaceComponent
  },
  {
    path:"/my-plan",
    component:MyPlanComponent
  },
  {
    path:"/my-favorites",
    component:MyFavotitesComponent
  },
  {
    path:"/about",
    component:AboutComponent
  },
  {
    path:"/page-not-found",
    component:Page404Component
  },
  {
    path:"**",
    redirectTo:"page-not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
