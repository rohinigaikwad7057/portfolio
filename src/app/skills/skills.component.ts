import { Component } from '@angular/core';
import { TechSkill, SkillCategory } from '../shared/models/portfolio.models';

interface SkillGroup {
  category: SkillCategory;
  label: string;
  icon: string;
  skills: TechSkill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillGroups: SkillGroup[] = [
    {
      category: 'frontend',
      label: 'Frontend',
      icon: 'fas fa-layer-group',
      skills: [
        { name: 'Angular 13+', icon: 'devicon-angularjs-plain', category: 'frontend' },
        { name: 'React.js', icon: 'devicon-react-original', category: 'frontend' },
        { name: 'Next.js 15', icon: 'devicon-nextjs-original', category: 'frontend' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain', category: 'frontend' },
        { name: 'JavaScript (ES6+)', icon: 'devicon-javascript-plain', category: 'frontend' },
        { name: 'Redux Toolkit', icon: 'devicon-redux-original', category: 'frontend' },
        { name: 'React Context API', icon: 'devicon-react-original', category: 'frontend' },
        { name: 'RxJS', icon: 'devicon-rxjs-plain', category: 'frontend' },
        { name: 'HTML5', icon: 'devicon-html5-plain', category: 'frontend' },
        { name: 'CSS3', icon: 'devicon-css3-plain', category: 'frontend' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', category: 'frontend' }
      ]
    },

    {
      category: 'backend',
      label: 'Backend & Database',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain', category: 'backend' },
        { name: 'Express.js', icon: 'devicon-express-original', category: 'backend' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain', category: 'backend' },
        { name: 'Prisma ORM', icon: 'devicon-prisma-original', category: 'backend' },
        { name: 'REST APIs', icon: 'fas fa-plug', category: 'backend' },
        { name: 'JWT Authentication', icon: 'fas fa-key', category: 'backend' }
      ]
    },

    {
      category: 'tools',
      label: 'Tools & DevOps',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', icon: 'devicon-git-plain', category: 'tools' },
        { name: 'GitHub', icon: 'devicon-github-original', category: 'tools' },
        { name: 'VS Code', icon: 'devicon-vscode-plain', category: 'tools' },
        { name: 'Postman', icon: 'devicon-postman-plain', category: 'tools' },
        { name: 'Vercel', icon: 'fas fa-cloud', category: 'tools' },
        { name: 'NPM', icon: 'devicon-npm-original-wordmark', category: 'tools' },
        { name: 'Sentry', icon: 'fas fa-bug', category: 'tools' }
      ]
    },

    {
      category: 'concepts',
      label: 'Core Concepts',
      icon: 'fas fa-brain',
      skills: [
        { name: 'Responsive Design', icon: 'fas fa-mobile-alt', category: 'concepts' },
        { name: 'State Management', icon: 'fas fa-project-diagram', category: 'concepts' },
        { name: 'REST API Integration', icon: 'fas fa-plug', category: 'concepts' },
        { name: 'SSR / SSG', icon: 'fas fa-server', category: 'concepts' },
        { name: 'Performance Optimization', icon: 'fas fa-tachometer-alt', category: 'concepts' },
        { name: 'Accessibility (WCAG)', icon: 'fas fa-universal-access', category: 'concepts' },
        { name: 'Authentication & Authorization', icon: 'fas fa-lock', category: 'concepts' },
        { name: 'WebSockets', icon: 'fas fa-wifi', category: 'concepts' },
        { name: 'Agile / Scrum', icon: 'fas fa-sync-alt', category: 'concepts' }
      ]
    }
  ];
}