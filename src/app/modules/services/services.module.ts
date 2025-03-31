import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HiringComponent } from './components/hiring/hiring.component';
import { HiredevComponent } from './components/hiredev/hiredev.component';
import { FullstackComponent } from './components/fullstack/fullstack.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { DataService } from '../../services/data.service';

const routes: Routes = [{ path: '', component: HiringComponent }];

@NgModule({
  declarations: [
    HiringComponent,
    HiredevComponent,
    FullstackComponent,
    PricingComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [DataService],
})
export class ServicesModule {}
