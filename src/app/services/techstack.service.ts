import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TechstackService {
  getMachineLearningIcons() {
    return [
      { src: 'assets/techstack/Angular.png', alt: 'Angular', width: '100px' },
      { src: 'assets/techstack/React.png', alt: 'React', width: '100px' },
      { src: 'assets/techstack/Vue.js.png', alt: 'Vue.js', width: '100px' },
    ];
  }
}