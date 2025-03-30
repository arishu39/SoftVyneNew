import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { Content } from '../content.interface';

@Component({
  selector: 'app-hiredev',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiredev.component.html',
  styleUrl: './hiredev.component.scss',
})
export class HiredevComponent implements OnInit {
  hiredevContent: Content | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getHiredevContent().subscribe((content) => {
      this.hiredevContent = content;
    });
  }
}
