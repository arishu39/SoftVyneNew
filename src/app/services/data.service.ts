import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  Content,
  HireDevContent,
  LanguageSpecificContent,
  FullstackContent,
  FullstackLanguageContent,
} from '../interfaces/content.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly DEFAULT_LANGUAGE = 'angular';

  constructor(private http: HttpClient) {}

  getHiringContent(language: string = this.DEFAULT_LANGUAGE): Observable<
    LanguageSpecificContent & {
      trialButtonText: string;
      callButtonText: string;
    }
  > {
    return this.http.get<Content>('assets/content/hiring-content.json').pipe(
      map((content) => ({
        ...content.languages[language],
        trialButtonText: content.trialButtonText,
        callButtonText: content.callButtonText,
      }))
    );
  }

  getHiredevContent(): Observable<HireDevContent> {
    return this.http.get<HireDevContent>('assets/content/hiredev-content.json');
  }

  getPricingContent(language: string = this.DEFAULT_LANGUAGE): Observable<
    LanguageSpecificContent & {
      trialButtonText: string;
      callButtonText: string;
    }
  > {
    return this.http.get<Content>('assets/content/pricing-content.json').pipe(
      map((content) => ({
        ...content.languages[language],
        trialButtonText: content.trialButtonText,
        callButtonText: content.callButtonText,
      }))
    );
  }

  getFullstackContent(
    language: string = this.DEFAULT_LANGUAGE
  ): Observable<FullstackLanguageContent> {
    return this.http
      .get<FullstackContent>('assets/content/fullstack-content.json')
      .pipe(map((content) => content.languages[language]));
  }
}
