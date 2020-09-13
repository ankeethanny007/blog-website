import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainContainerComponent } from "./components/main-container/main-container.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { AllPostsComponent } from "./components/all-posts/all-posts.component";

const routes: Routes = [
  { path: "", component: MainContainerComponent, pathMatch: "full" },
  { path: "home", component: MainContainerComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "posts", component: AllPostsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
