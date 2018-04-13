import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
message="first part of the message goes here";
informationMessage="you can provide hyperlink here for some more info";

  constructor() { }

  ngOnInit() {
  }

}
