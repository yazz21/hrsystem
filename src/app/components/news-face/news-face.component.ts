import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewsService } from "src/app/services/news.service";

@Component({
  selector: "app-news-face",
  templateUrl: "./news-face.component.html",
  styleUrls: ["./news-face.component.css"],
})
export class NewsFaceComponent implements OnInit {
  constructor(
    private neweservice: NewsService,
    private activatedRoute: ActivatedRoute
  ) {}

  news: any;
  newsid: any;

  ngOnInit() {
    // this.newes.getonenews().subscribe((res) => {
    //   this.news = res;
    // });

    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      let id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
      this.newsid = id;
    });

    console.log(this.newsid);
    this.neweservice.getonenews(this.newsid).subscribe((res) => {
      console.log(res);

      this.news = res;
      console.log(this.news);
    });
  }
}
