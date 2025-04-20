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
  @Input() mainRoute: string = '';
  @Input() subRoute: string = '';
  content: FullstackLanguageContent | undefined;

  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['mainRoute'] || changes['subRoute']) && this.mainRoute) {
      this.dataService.getFullstackContent(this.mainRoute).subscribe((data) => {
        this.content = data;
      });
    }
  }

  ngOnInit(): void {
    // Remove the content fetching from here as it's now handled in ngOnChanges
  }
}
