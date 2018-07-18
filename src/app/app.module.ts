import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import {FlexLayoutModule, BREAKPOINTS, DEFAULT_BREAKPOINTS} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicdetailsComponent } from './topicdetails/topicdetails.component';
import { MainComponent } from './main/main.component';
import { MaincontentService } from './maincontent.service';

import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatToolbarModule, MatIconModule} from  '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';

export const BreakPointsProvider = { 
  provide: BREAKPOINTS,
  useValue: DEFAULT_BREAKPOINTS
};

@NgModule({
  declarations: [ // modules goes here
    AppComponent,
    HeroesComponent,
    HeaderComponent,
    FooterComponent,
    TopicsComponent,
    TopicdetailsComponent,
    MainComponent
  ],
  imports: [ // modules goes here
    FlexLayoutModule ,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule
  ],
  providers: [MaincontentService, BreakPointsProvider], // services goes here,The providers array tells Angular to create a single, shared instance of HeroService and inject into any class that asks for it.
  bootstrap: [AppComponent]
})
export class AppModule { }
