import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
   // CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
