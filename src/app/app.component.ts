import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { BooztServicesComponent } from './boozt-services/boozt-services.component';
import { BooztServices2Component } from './boozt-services2/boozt-services2.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { FinalComponent } from './final/final.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutComponent,
    BooztServicesComponent,
    BooztServices2Component,
    PortfolioComponent,
    PricingComponent,
    FinalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bootz';
}
