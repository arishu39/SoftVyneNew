import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
export class FullstackComponent implements OnInit, OnChanges {
  @Input() serviceType: string = '';
  content: FullstackLanguageContent | undefined;

  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['serviceType'] && this.serviceType) {
      this.dataService
        .getFullstackContent(this.serviceType)
        .subscribe((data) => {
          this.content = data;
        });
    }
  }

  ngOnInit(): void {
    // Remove the content fetching from here as it's now handled in ngOnChanges
  }
}
