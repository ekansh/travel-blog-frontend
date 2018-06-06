import { Component, OnInit } from '@angular/core';
import { MaincontentService } from '../maincontent.service';
import { Topics } from '../model/topics';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  contact: Map<string, string>;
  headerLinks:Topics[];

  constructor(private contentService: MaincontentService) { }

  ngOnInit() {
    this.init();    
  }
  init(): void {
    this.contentService.getTitle().subscribe(e => this.title = e);
    this.contentService.getContact().subscribe(e => this.contact = e);
    this.contentService.getNavigationHeaders().subscribe(e => this.headerLinks = e);
    
  }
}
