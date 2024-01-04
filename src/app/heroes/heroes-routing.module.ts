import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayautPageComponent } from './pages/layaut-page/layaut-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewHeroComponent } from './pages/new-hero/new-hero.component';


const routes: Routes = [
  {
    path:'',
    component: LayautPageComponent,
    children:[
      {path:'new-hero', component:NewHeroComponent},
      {path:'search', component: SearchPageComponent},
      {path:'list', component:ListPageComponent},
      {path:'edit/:id', component: NewHeroComponent},
      {path:':id', component:HeroPageComponent},
      {path:'**', redirectTo:'list'}

    ]

    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
