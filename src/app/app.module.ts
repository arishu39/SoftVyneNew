import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TechstackComponent } from './techstack/techstack.component';
import { IndustriesComponent } from './industries/industries.component';
import { ContactlocationsComponent } from './contactlocations/contactlocations.component';
import { ConnectComponent } from './connect/connect.component';
import { AIComponent } from './ai/ai.component';
import { ClientComponent } from './client/client.component';
import { HiringComponent } from './hiring/hiring.component';
import { HiredevComponent } from './hiredev/hiredev.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { PricingComponent } from './pricing/pricing.component';
import { DataService } from './data.service';

console.log(
  'Is AppComponent standalone?:',
  (AppComponent as any).ɵcmp?.standalone
);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    TechstackComponent,
    IndustriesComponent,
    ContactlocationsComponent,
    ConnectComponent,
    AIComponent,
    ClientComponent,
    HiringComponent,
    HiredevComponent,
    FullstackComponent,
    PricingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
    CommonModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
