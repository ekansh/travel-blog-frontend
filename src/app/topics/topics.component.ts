import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topics } from '../model/topics';
import { TOPICS } from '../mockmodel/mock-topics';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
topics = TOPICS;
constructor(private router: Router) { }

  ngOnInit() {
  }
  viewDetails():void{
    console.log('view details');
    this.router.navigateByUrl('topicdetails');
  }

}
