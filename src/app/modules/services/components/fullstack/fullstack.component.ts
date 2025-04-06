import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import {
  FullstackContent,
  FullstackLanguageContent,
} from '../../../../interfaces/content.interface';

@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.component.html',
  styleUrl: './fullstack.component.scss',
  standalone: false,
})
export class FullstackComponent implements OnInit {
  @Input() serviceType: string = '';
  content: FullstackLanguageContent | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (this.serviceType) {
      this.dataService
        .getFullstackContent(this.serviceType)
        .subscribe((data) => {
          this.content = data;
        });
    }
  }
}
