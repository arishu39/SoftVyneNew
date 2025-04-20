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
  mainRoute: string = '';
  subRoute: string = '';
  componentKey = 0; // Add this to force refresh
  loading: boolean = true; // Add loading property

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      const oldMainRoute = this.mainRoute;
      const oldSubRoute = this.subRoute;
      this.mainRoute = params['mainRoute'];
      this.subRoute = params['subRoute'];

      // Only show loader when route parameters actually change
      if (oldMainRoute !== this.mainRoute || oldSubRoute !== this.subRoute) {
        this.loading = true;
        // Keep old content visible while loading
        setTimeout(() => {
          this.componentKey++;
          setTimeout(() => {
            this.loading = false;
          }, 300);
        }, 100);
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
