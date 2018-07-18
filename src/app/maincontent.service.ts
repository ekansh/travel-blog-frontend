import { Injectable } from '@angular/core';
import { Topics } from './model/topics';
import { TOPICS } from './mockmodel/mock-topics';
import { TOPICDETAILS } from './mockmodel/mock-topicdetails';
import { HEADERS } from './mockmodel/mock-headers';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TopicDetails } from './model/topicsdetails';
@Injectable()
export class MaincontentService {

  constructor() { }
  getTitle(): Observable<string> {
    return of("Traveling around the world")
  }

  getContact(): Observable<Map<string, string>> {
    var contact: Map<string, string> = new Map<string, string>();
    let ABOUT = "ABOUT";
    let SHORT_DESCRIPTION_SELF = "SHORT_DESCRIPTION_SELF";
    let FACEBOOK = "FACEBOOK";
    let TWITTER = "TWITTER";
    let EMAIL = "EMAIL";
    contact.set(ABOUT, "About");
    contact.set(SHORT_DESCRIPTION_SELF, "Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.");
    contact.set(EMAIL, "mail.ekansh@gmail.com");
    contact.set(FACEBOOK, "facebook.com/ekansh");
    contact.set(TWITTER, "@ekanshsingh");
    return of(contact);
  }
  getMetaData(): Observable<Map<string, string>> {
    var metaData: Map<string, string> = new Map<string, string>();
    return of(metaData);
  }

  getTopics(): Observable<Topics[]> {
    return of(TOPICS);
  }

  getMainImage(): Observable<Map<string, string>> {
    var imgMap: Map<string, string> = new Map<string, string>();
    var img = "assets/TORONTO.jpg";
    var alt = "Main Image";
    imgMap.set("src", img);
    imgMap.set("alt", alt);

    return of(imgMap)
  }
  getNavigationHeaders(): Observable<Topics[]> {
    return of(HEADERS);
  }

  getTopicDetails(id: string): Observable<TopicDetails[]> {

    TOPICDETAILS.forEach(e => console.log(e.imgSrc));
    var topicDetailsForId = TOPICDETAILS.filter(e =>e.id.toString==id.toString?true:false);
    console.log("topicDetailsForId "+topicDetailsForId);
    return of(topicDetailsForId);
  }


}
