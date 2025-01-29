import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  standalone: true, // Marking the component as standalone
  imports: [
    HomeComponent,
    AboutComponent,
    TechstackComponent,
    AIComponent,
    ClientComponent,
    IndustriesComponent,
    ServicesComponent,
    ContactlocationsComponent,
    ConnectComponent,
    PortfolioComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
  ], // Import RouterOutlet and RouterLink
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'softvyne';
}
