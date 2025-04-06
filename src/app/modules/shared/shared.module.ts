import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { ConnectComponent } from './components/connect/connect.component';
import { ContactlocationsComponent } from './components/contactlocations/contactlocations.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ServicesComponent,
    ConnectComponent,
    ContactlocationsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ServicesComponent,
    ConnectComponent,
    ContactlocationsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
