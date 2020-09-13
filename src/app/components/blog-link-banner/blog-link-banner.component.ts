import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blog-link-banner",
  templateUrl: "./blog-link-banner.component.html",
  styleUrls: ["./blog-link-banner.component.css"],
})
export class BlogLinkBannerComponent implements OnInit {
  links = [
    { name: "aa", link: "a" },
    { name: "bb", link: "b" },
    { name: "cc", link: "c" },
    { name: "dd", link: "d" },
    { name: "ee", link: "e" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
