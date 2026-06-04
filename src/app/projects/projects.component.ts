import { Component } from '@angular/core';
import { Project } from '../shared/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      id: 'appointment-scheduler',
      title: 'Smart Appointment Scheduler',
      description: 'Full-stack clinic management platform with real-time scheduling, role-based portals, and secure data workflows for healthcare teams.',
      highlights: [
        'Role-based access control — Admin, Doctor, and Patient portals',
        'Real-time appointment booking, rescheduling & cancellation',
        'RESTful API built with Node.js, Express, and MongoDB',
        'Angular 18 + TypeScript frontend, deployed on Render'
      ],
      tech: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/rohinigaikwad7057/smart-appointment-scheduler-frontend',
      liveUrl: 'https://smart-appointment-scheduler-frontend.onrender.com',
      featured: true,
      status: 'live'
    },
    {
      id: 'task-manager',
      title: 'Full Stack Task Manager',
      description: 'Production-ready task management app with JWT authentication, protected route guards, and real-time CRUD operations.',
      highlights: [
        'JWT authentication with Angular route guards',
        'Full CRUD — create, edit, prioritise, and delete tasks',
        'Search & filter tasks by priority and status',
        'React.js + Tailwind CSS frontend, Node.js + MongoDB backend'
      ],
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
      githubUrl: 'https://github.com/rohinigaikwad7057',
      liveUrl: "https://task-manager-frontend-ry3t.onrender.com/dashboard?mode=login",
      featured: false,
      status: 'live'
    },
    {
      id: 'portfolio',
      title: 'Developer Portfolio Website',
      description: 'This portfolio — an Angular 18 SPA with standalone components, Angular Signals, scroll animations, and an AI Resume Assistant chatbot.',
      highlights: [
        'Angular 18 standalone components with Signals for reactive state',
        'IntersectionObserver active-nav highlighting & AOS scroll animations',
        'AI Resume Assistant chatbot — FAQ engine with pattern matching',
        'Deployed on GitHub Pages with production build optimisation'
      ],
      tech: ['Angular 18', 'TypeScript', 'Signals', 'AOS', 'GitHub Pages'],
      githubUrl: 'https://github.com/rohinigaikwad7057/portfolio',
      liveUrl: 'https://rohinigaikwad7057.github.io/portfolio/',
      featured: false,
      status: 'live'
    }
  ];
}
