import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Content,
  HireDevContent,
} from '../../../../interfaces/content.interface';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-hiredev',
  templateUrl: './hiredev.component.html',
  styleUrls: ['./hiredev.component.scss'],
  standalone: false,
})
export class HiredevComponent implements OnInit {
  @Input() serviceType: string = '';
  hiredevContent: HireDevContent | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (this.serviceType) {
      this.dataService.getHiredevContent().subscribe((content) => {
        this.hiredevContent = content;
      });
    }
  }
}
