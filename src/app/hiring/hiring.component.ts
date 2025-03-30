import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { Content } from '../content.interface';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrl: './hiring.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class HiringComponent implements OnInit {
  hiringContent: Content | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getHiringContent().subscribe((content) => {
      this.hiringContent = content;
    });
  }
}
