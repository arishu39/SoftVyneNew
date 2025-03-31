import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../services/services.component';
import { ConnectComponent } from '../connect/connect.component';
import { ContactlocationsComponent } from '../contactlocations/contactlocations.component';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  declarations: [
    ServicesComponent,
    ConnectComponent,
    ContactlocationsComponent,
    ContactComponent,
  ],
  imports: [CommonModule],
  exports: [
    ServicesComponent,
    ConnectComponent,
    ContactlocationsComponent,
    ContactComponent,
  ],
})
export class SharedModule {}
