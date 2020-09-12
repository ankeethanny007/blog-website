import { Component, OnInit } from "@angular/core";
import { AdvertisementBannerComponent } from "./../advertisement-banner/advertisement-banner.component";
import { BlogLinkBannerComponent } from "./../blog-link-banner/blog-link-banner.component";
import { MainContainerComponent } from "./../main-container/main-container.component";
import { ProfileBannerComponent } from "./../profile-banner/profile-banner.component";
import { HeaderComponent } from "./../header/header.component";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
