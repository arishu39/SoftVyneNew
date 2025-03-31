import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HiringComponent } from '../hiring/hiring.component';
import { HiredevComponent } from '../hiredev/hiredev.component';
import { FullstackComponent } from '../fullstack/fullstack.component';
import { PricingComponent } from '../pricing/pricing.component';

const routes: Routes = [{ path: '', component: HiringComponent }];

@NgModule({
  declarations: [
    HiringComponent,
    HiredevComponent,
    FullstackComponent,
    PricingComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ServicesModule {}
