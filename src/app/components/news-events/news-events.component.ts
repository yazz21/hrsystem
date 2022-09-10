import { Component, OnInit } from "@angular/core";
import { NewsService } from "src/app/services/news.service";

@Component({
  selector: "app-news-events",
  templateUrl: "./news-events.component.html",
  styleUrls: ["./news-events.component.css"],
})
export class NewsEventsComponent implements OnInit {
  constructor(private news: NewsService) {}
  newes: any;
  ngOnInit() {
    this.news.getAllNews().subscribe((res) => {
      console.log(res);
      this.newes = res;
    });
  }
}
