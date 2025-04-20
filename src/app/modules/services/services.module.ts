import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HiringComponent } from './components/hiring/hiring.component';
import { HiredevComponent } from './components/hiredev/hiredev.component';
import { FullstackComponent } from './components/fullstack/fullstack.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { DataService } from '../../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicesRoutingModule } from './services-main-routing.module';
import { ServicesMainComponent } from './components/services-main/services-main.component';
import { TechBannerComponent } from './components/tech-banner/tech-banner.component';

@NgModule({
  declarations: [
    HiringComponent,
    HiredevComponent,
    FullstackComponent,
    PricingComponent,
    ServicesMainComponent,
    TechBannerComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    ServicesRoutingModule,
  ],
  providers: [DataService],
})
export class ServicesModule {}
