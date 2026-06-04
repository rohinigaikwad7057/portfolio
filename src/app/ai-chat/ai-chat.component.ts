import {
  Component, signal, ViewChild, ElementRef,
  AfterViewChecked
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ChatMessage } from '../shared/models/portfolio.models';

const FAQ: Array<{ patterns: string[]; answer: string }> = [
  {
    patterns: ['skill', 'technology', 'tech', 'stack', 'know', 'angular', 'react', 'typescript'],
    answer: 'My core stack is Angular 18+, TypeScript, and RxJS for frontend. I also work with React.js, Node.js, Express and MongoDB. For styling I use Tailwind CSS and plain SCSS.'
  },
  {
    patterns: ['experience', 'year', 'background', 'work', 'job', 'worked'],
    answer: 'I have 3.6 years of professional experience — primarily at Infosys in Pune building enterprise Angular applications, real-time dashboards and AI-assisted UI features.'
  },
  {
    patterns: ['project', 'portfolio', 'built', 'made'],
    answer: 'My featured projects include a Smart Appointment Scheduler (Angular + Node.js + MongoDB), a Full-Stack Task Manager (React + JWT), and this portfolio site with an AI assistant. Scroll up to the Projects section to explore them!'
  },
  {
    patterns: ['contact', 'hire', 'email', 'reach', 'available', 'job', 'opportunity', 'role'],
    answer: 'I\'m actively looking for Frontend Engineer roles in UAE and remote internationally. You can reach me at rohinigaikwad7057@gmail.com or connect on LinkedIn. Use the contact form above!'
  },
  {
    patterns: ['resume', 'cv', 'download'],
    answer: 'You can download my resume PDF from the Resume section or by clicking the "Resume" button in the navigation bar.'
  },
  {
    patterns: ['location', 'abu dhabi', 'dubai', 'uae', 'where', 'based'],
    answer: 'I\'m based in Abu Dhabi, UAE. I\'m open to on-site roles in Dubai, Abu Dhabi, and remote opportunities globally.'
  },
  {
    patterns: ['education', 'degree', 'study', 'college', 'university'],
    answer: 'I hold a Bachelor of Engineering in Computer Science (First Class with Distinction) from Sir Visvesvaraya Institute of Technology.'
  }
];

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.css']
})
export class AiChatComponent implements AfterViewChecked {
  @ViewChild('chatWindow') chatWindow?: ElementRef<HTMLDivElement>;

  isOpen   = signal(false);
  inputText = signal('');
  messages  = signal<ChatMessage[]>([
    {
      role: 'bot',
      text: 'Hi! I\'m Rohini\'s AI assistant. Ask me about her skills, projects, experience or how to get in touch.',
      timestamp: new Date()
    }
  ]);
  isTyping = signal(false);

  toggleChat(): void {
    this.isOpen.update(v => !v);
  }

  send(): void {
    const text = this.inputText().trim();
    if (!text) return;

    this.messages.update(msgs => [...msgs, {
      role: 'user', text, timestamp: new Date()
    }]);
    this.inputText.set('');
    this.isTyping.set(true);

    setTimeout(() => {
      this.isTyping.set(false);
      this.messages.update(msgs => [...msgs, {
        role: 'bot',
        text: this.getReply(text),
        timestamp: new Date()
      }]);
    }, 800);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.chatWindow?.nativeElement) {
      const el = this.chatWindow.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }

  private getReply(input: string): string {
    const lower = input.toLowerCase();
    for (const faq of FAQ) {
      if (faq.patterns.some(p => lower.includes(p))) {
        return faq.answer;
      }
    }
    return "I'm not sure about that! Try asking about Rohini's skills, experience, projects, or how to contact her.";
  }
}
