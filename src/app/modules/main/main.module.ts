import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TechstackComponent } from './components/techstack/techstack.component';
import { AIComponent } from './components/ai/ai.component';
import { ClientComponent } from './components/client/client.component';
import { IndustriesComponent } from './components/industries/industries.component';
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
