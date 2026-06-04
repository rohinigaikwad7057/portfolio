import { Component } from '@angular/core';
import { Education, Experience } from '../shared/models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experience: Experience[] = [
    {
      id: 'infosys-2021',
      period: 'Apr 2021 – Oct 2025',
      location: 'Pune, India',
      title: 'Frontend Developer',
      company: 'Infosys Ltd',
      type: 'full-time',
      highlights: [
        'Built real-time analytics dashboards and chat modules using Angular 13+, RxJS, and WebSockets — serving thousands of concurrent enterprise users.',
        'Collaborated with ML and backend teams to deliver AI-assisted UI features: predictive smart filters and autocomplete powered by LLM APIs.',
        'Architected lazy-loaded standalone components and modular Angular structure, cutting initial bundle size by ~40%.',
        'Led WCAG 2.1 accessibility improvements across 12+ major product modules, raising Lighthouse accessibility scores to 95+.',
        'Integrated Sentry error monitoring and real-time performance dashboards, significantly reducing MTTD (mean time to detect) for production issues.',
        'Mentored 2 junior developers on Angular best practices, component patterns, and code review standards.'
      ]
    }
  ];

  education: Education[] = [
    {
      id: 'be-2021',
      year: '2017 – 2021',
      degree: 'B.E. Computer Engineering',
      institute: 'Sir Visvesvaraya Institute of Technology',
      grade: 'First Class with Distinction'
    },
    {
      id: 'hsc-2017',
      year: '2015 – 2017',
      degree: 'Higher Secondary Certificate (HSC)',
      institute: 'Janta Vidyalaya',
      grade: 'First Class with Distinction'
    }
  ];

  downloadCV(): void {
    window.open('assets/Rohini_Gaikwad_Angular_React_Developer.pdf.pdf', '_blank', 'noopener,noreferrer');
  }
}
