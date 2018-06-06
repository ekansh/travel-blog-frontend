import { Component, OnInit } from '@angular/core';
import { MaincontentService } from '../maincontent.service';
import { Topics } from '../model/topics';

import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mainSectionHeading: string;
  mainSectionShortDescription: string;
  mainSectionReadMore: string;
  mainTopic: Topics;
  constructor(private router: Router,private contentService: MaincontentService) { }

  ngOnInit() {
    this.init();
  }
  init(): void {
   
    this.contentService.getTopics().subscribe(e => this.mainTopic = e == null ? new Topics() : e[0]);
  }
  goto(link:string):void{
    console.log('main topic details');
    this.router.navigateByUrl('topicdetails');
  }

}
