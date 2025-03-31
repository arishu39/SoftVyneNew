import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import {
  Content,
  LanguageSpecificContent,
} from '../../../../interfaces/content.interface';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrl: './hiring.component.scss',
  standalone: false,
})
export class HiringComponent implements OnInit {
  hiringContent:
    | (LanguageSpecificContent & {
        trialButtonText: string;
        callButtonText: string;
      })
    | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getHiringContent().subscribe((content) => {
      this.hiringContent = content;
    });
  }
}
