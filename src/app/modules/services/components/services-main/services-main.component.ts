import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrl: './services-main.component.scss',
  standalone: false,
})
export class ServicesMainComponent implements OnInit {
  serviceType: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.serviceType = params['serviceType'];
      console.log(this.serviceType); // Log the service type to the console
      // You can now use this.serviceType in your component logic
    });
  }
}
