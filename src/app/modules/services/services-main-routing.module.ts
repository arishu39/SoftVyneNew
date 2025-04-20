import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesMainComponent } from './components/services-main/services-main.component';

const routes: Routes = [
  {
    path: ':mainRoute/:subRoute',
    component: ServicesMainComponent,
  },
  {
    path: 'ai-machine-learning',
    redirectTo: 'ai-machine-learning/ai-agents',
    pathMatch: 'full',
  },
  {
    path: 'full-stack-engineering',
    redirectTo: 'full-stack-engineering/web-mobile-development',
    pathMatch: 'full',
  },
  {
    path: 'cloud-devops-automation',
    redirectTo: 'cloud-devops-automation/multi-cloud',
    pathMatch: 'full',
  },
  {
    path: 'data-engineering-analytics',
    redirectTo: 'data-engineering-analytics/data-warehousing-etl',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'ai-machine-learning/ai-agents',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
