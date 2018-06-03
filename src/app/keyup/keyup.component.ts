import { Component, OnInit } from '@angular/core';
import { Http,  Header, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})

export class KeyupComponent implements OnInit {

  const API_URL = 'https://www.eventbriteapi.com/v3';
  const EVENTS_ENDPOINT = '/events/search?location.address';
  const TOKEN = "PCW5GLENURRIRDFZ6Y5D";

  result, keyword, http;

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }

  onKey(event: KeyboardEvent) { // with type info
    this.keyword = (<HTMLInputElement>event.target).value;
    this.getEvents();
  }

  getEvents(http: Http)
  {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', `*`);

    const options = new RequestOptions({headers: headers});

    // let url = this.buildUrl();
    let url = "?location.address=Yerevan&token=EQNTGDANYGSPBJUJQZQB";

    let params = {
      "location.address" : this.keyword,
      "token" : this.TOKEN
    }

    this.http.get("https://www.eventbriteapi.com/v3/events/search?location.address="+this.keyword+"&token="+this.TOKEN, options).subscribe(result => this.result = result.json());

    console.log('result is ', this.result);
  }

  buildUrl()
  {
    return this.API_URL + this.EVENTS_ENDPOINT + '&token=' + this.TOKEN;
  }



}
