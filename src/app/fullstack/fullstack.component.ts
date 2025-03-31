import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {
  FullstackContent,
  FullstackLanguageContent,
} from '../content.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.component.html',
  styleUrl: './fullstack.component.scss',
  standalone: false,
})
export class FullstackComponent implements OnInit {
  content: FullstackLanguageContent | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getFullstackContent().subscribe((data) => {
      this.content = data;
    });
  }
}
