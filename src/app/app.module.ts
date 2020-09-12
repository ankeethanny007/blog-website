import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdvertisementBannerComponent } from "./components/advertisement-banner/advertisement-banner.component";
import { MainContainerComponent } from "./components/main-container/main-container.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { BlogLinkBannerComponent } from "./components/blog-link-banner/blog-link-banner.component";
import { ProfileBannerComponent } from "./components/profile-banner/profile-banner.component";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementBannerComponent,
    MainContainerComponent,
    HomepageComponent,
    BlogLinkBannerComponent,
    ProfileBannerComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
