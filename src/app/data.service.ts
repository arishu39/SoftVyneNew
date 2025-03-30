import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './content.interface';
import { FullstackContent } from './content.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getHiringContent(): Observable<Content> {
    return of({
      heroTitle: 'Hire Angular Developers',
      heroDescription:
        'Hire Angular developers from us to create dynamic and interactive web applications. Our experienced developers ensure seamless performance, easy navigation, and enhanced UX, delivering 2x faster results. Get in touch to build consistent, scalable front-ends that drive your business growth.',
      trialButtonText: 'START 15 DAYS RISK-FREE TRIAL',
      callButtonText: 'SCHEDULE A CALL',
      experienceYears: '13+ Years',
      upgradeServiceText: 'Angular Upgrade Service',
      costSavingText: 'Save Up to 40% On Development Cost',
      imageUrl: 'assets/insights.jpg',
      positions: [
        {
          title: 'Software Developer',
          description: 'Join our development team',
          requirements: ['Angular experience', 'TypeScript knowledge'],
          location: 'Remote',
        },
      ],
    });
  }

  getHiredevContent(): Observable<Content> {
    return of({
      heroTitle: 'Hire Dedicated Developers',
      heroDescription:
        'Supercharge your projects with our expert developers. We offer flexible hiring models to fit your needs. Scale your team with top talent and achieve your goals faster.',
      trialButtonText: 'START 15 DAYS RISK-FREE TRIAL',
      callButtonText: 'SCHEDULE A CALL',
      experienceYears: '10+ Years',
      upgradeServiceText: 'Custom Development Solutions',
      costSavingText: 'Reduce Development Costs by 50%',
      imageUrl: 'assets/dedicated-developers.jpg',
      positions: [
        {
          title: 'Frontend Developer',
          description: 'Looking for skilled frontend developers',
          requirements: ['React', 'Angular', 'Vue.js'],
          location: 'Remote',
        },
      ],
    });
  }

  getPricingContent(): Observable<Content> {
    return of({
      heroTitle: 'Hire Angular Developer As Per Your Need',
      heroDescription:
        'Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy Exit Policy',
      trialButtonText: 'SCHEDULE A DEVELOPER INTERVIEW',
      callButtonText: 'SCHEDULE A CALL',
      hourlyPrice: '$2',
      monthlyPriceIndividual: '$2',
      monthlyPriceTeam: '$1',
      hourlyDescription:
        'We’ll provide a fully signed NDA for your project’s confidentiality.',
      monthlyDescriptionIndividual:
        'Senior Angular Developer <br />160 hours per month.',
      monthlyDescriptionTeam: 'Build a SCRUM Team of 5 Developers.',
      positions: [],
    });
  }

  getFullstackContent(): Observable<FullstackContent> {
    return of({
      title: 'Drive Web Excellence with Our Top Full-Stack Angular Developers',
      description:
        'Angular is an excellent choice for front-end development when paired with back-end technologies like Rails, Node.js, and PHP. Build next-gen solutions that make your app stand out.',
      items: [
        {
          icon: 'assets/techstack/Angular.png',
          alt: 'Angular AWS',
          title: 'Angular + AWS',
          content:
            'Combine Angular with AWS for scalable cloud hosting, seamless CI/CD, and a secure backend.',
        },
        {
          icon: 'assets/techstack/Angular.png',
          alt: 'Angular Docker',
          title: 'Angular + Docker',
          content:
            'Use Docker with Angular for simplified deployments, faster development cycles, and scalability.',
        },
        {
          icon: 'assets/techstack/Angular.png',
          alt: 'Angular ROR',
          title: 'Angular + ROR',
          content:
            'Pair Angular with Ruby on Rails for a powerful front-end and a rapid, flexible backend.',
        },
      ],
    });
  }
}
