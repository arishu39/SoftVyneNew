import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss'],
  standalone: false,
})
export class ServicesMainComponent implements OnInit, OnDestroy {
  private routeSub!: Subscription;
  serviceType: string = '';
  componentKey = 0; // Add this to force refresh

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.serviceType = params['serviceType'];
      this.componentKey++; // Increment to force refresh child components
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
