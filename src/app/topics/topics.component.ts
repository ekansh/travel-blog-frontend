import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topics } from '../model/topics';
import { MaincontentService } from '../maincontent.service';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: Topics[];

  constructor(private router: Router, private contentService: MaincontentService) { }

  ngOnInit() {
    this.getTopics();
  }
  viewDetails(): void {
    console.log('view details');
    this.router.navigateByUrl('topicdetails');
  }
  getTopics(): void {
    this.contentService.getTopics().subscribe(topicsArray => this.topics = topicsArray);
  }
 

}
