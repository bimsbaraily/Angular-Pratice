import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {



  // CountryName = "india";
  // CountryCapital = "New Detail";
  // CountryCode = "+922";

  public showMore: boolean = false;

  showData() {
    this.showMore = !this.showMore;

  }
  constructor(private http: HttpClient) { }
  httpdata;

  ngOnInit() {
    this.http.get("https://restcountries.eu/rest/v2/name/india?fullText=true")
      .subscribe((data) => this.displaydata(data));
  }
  displaydata(data) { this.httpdata = data; }
}
