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
  imgMap: Map<string, string>;
  mainSectionHeading: string;
  mainSectionShortDescription: string;
  mainSectionReadMore: string; 
  mainTopic: Topics[];
  constructor(private router: Router, private contentService: MaincontentService) { }
  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  ngOnInit() {
    this.init();
  }
  init(): void {
    this.contentService.getTopics().subscribe(e => {
        e.forEach(element => {
              console.log("element link "+ element.link)
               element.link = "/topicdetails/" + element.link;
                 });
        this.mainTopic = e
      }
    );
    this.contentService.getMainImage().subscribe(e => this.imgMap = e);
  }
  goto(link: string): void {
    console.log('main topic details');
    this.router.navigateByUrl('topicdetails');
  }

}
