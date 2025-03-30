import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FullstackContent } from '../content.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fullstack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fullstack.component.html',
  styleUrl: './fullstack.component.scss',
})
export class FullstackComponent implements OnInit {
  content: FullstackContent | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getFullstackContent().subscribe((data) => {
      this.content = data;
    });
  }
}
