import { Component, OnInit } from '@angular/core';
import { Topics } from '../model/topics';
import { TOPICS } from '../mockmodel/mock-topics';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
topics = TOPICS;
  constructor() {console.log('scope is ' + this.topics.length); }

  ngOnInit() {
  }

}
