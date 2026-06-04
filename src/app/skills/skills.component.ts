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
        { name: 'Angular 13+',  icon: 'devicon-angularjs-plain',    category: 'frontend' },
        { name: 'TypeScript',   icon: 'devicon-typescript-plain',   category: 'frontend' },
        { name: 'JavaScript',   icon: 'devicon-javascript-plain',   category: 'frontend' },
        { name: 'React.js',     icon: 'devicon-react-original',     category: 'frontend' },
        { name: 'RxJS',         icon: 'devicon-rxjs-plain',         category: 'frontend' },
        { name: 'HTML5',        icon: 'devicon-html5-plain',        category: 'frontend' },
        { name: 'CSS3',         icon: 'devicon-css3-plain',         category: 'frontend' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain',  category: 'frontend' },
      ]
    },
    {
      category: 'backend',
      label: 'Backend & DB',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js',   icon: 'devicon-nodejs-plain',    category: 'backend' },
        { name: 'Express.js',icon: 'devicon-express-original',category: 'backend' },
        { name: 'MongoDB',   icon: 'devicon-mongodb-plain',   category: 'backend' },
        { name: 'REST APIs', icon: 'devicon-fastapi-plain',   category: 'backend' },
      ]
    },
    {
      category: 'tools',
      label: 'Tools & DevOps',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git',      icon: 'devicon-git-plain',      category: 'tools' },
        { name: 'GitHub',   icon: 'devicon-github-original',category: 'tools' },
        { name: 'VS Code',  icon: 'devicon-vscode-plain',   category: 'tools' },
        { name: 'Postman',  icon: 'devicon-postman-plain',  category: 'tools' },
        { name: 'Sentry',   icon: 'fas fa-bug',             category: 'tools' },
        { name: 'NPM',      icon: 'devicon-npm-original-wordmark', category: 'tools' },
      ]
    },
    {
      category: 'concepts',
      label: 'Concepts',
      icon: 'fas fa-brain',
      skills: [
        { name: 'Responsive Design', icon: 'fas fa-mobile-alt',    category: 'concepts' },
        { name: 'Performance Optim.', icon: 'fas fa-tachometer-alt',category: 'concepts' },
        { name: 'WebSockets',        icon: 'fas fa-wifi',           category: 'concepts' },
        { name: 'AI / LLM APIs',     icon: 'fas fa-robot',          category: 'concepts' },
        { name: 'Accessibility',     icon: 'fas fa-universal-access',category: 'concepts' },
        { name: 'Agile / Scrum',     icon: 'fas fa-sync-alt',       category: 'concepts' },
      ]
    }
  ];
}
