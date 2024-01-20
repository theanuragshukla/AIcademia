import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { Routes } from "@angular/router";
const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    }
  ];

  export default routeConfig;