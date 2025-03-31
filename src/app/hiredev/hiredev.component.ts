import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { Content, HireDevContent } from '../content.interface';

@Component({
  selector: 'app-hiredev',
  templateUrl: './hiredev.component.html',
  styleUrls: ['./hiredev.component.scss'],
  standalone: false,
})
export class HiredevComponent implements OnInit {
  hiredevContent: HireDevContent | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getHiredevContent().subscribe((content) => {
      this.hiredevContent = content;
    });
  }
}
