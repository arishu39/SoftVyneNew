import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { TechstackComponent } from '../techstack/techstack.component';
import { AIComponent } from '../ai/ai.component';
import { ClientComponent } from '../client/client.component';
import { IndustriesComponent } from '../industries/industries.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    TechstackComponent,
    AIComponent,
    ClientComponent,
    IndustriesComponent,
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
