import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayautPageComponent } from './pages/layaut-page/layaut-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewHeroComponent } from './pages/new-hero/new-hero.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayautPageComponent,
    ListPageComponent,
    NewHeroComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
