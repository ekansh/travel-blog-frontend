import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TopicDetails } from '../model/topicsdetails';
import { MaincontentService } from '../maincontent.service';

@Component({
  selector: 'app-topicdetails',
  templateUrl: './topicdetails.component.html',
  styleUrls: ['./topicdetails.component.css']
})
export class TopicdetailsComponent implements OnInit {
  id: string;
  topicDetails: TopicDetails[];
  constructor(private route: ActivatedRoute, private contentService: MaincontentService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        console.log("id opbtained " + this.id);
      }
    );
    this.contentService.getTopicDetails(this.id).subscribe(e => this.topicDetails = e);
    console.log("topic details " + this.topicDetails.length + " text " );
    console.log("topic details " + this.topicDetails.length + " text " );
    console.log("topic details " + this.topicDetails.length + " text " );
  }

}
