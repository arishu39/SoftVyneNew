import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesMainComponent } from './components/services-main/services-main.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
