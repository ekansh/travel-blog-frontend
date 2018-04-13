import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { TopicdetailsComponent } from './topicdetails/topicdetails.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'topicdetails', component: TopicdetailsComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
