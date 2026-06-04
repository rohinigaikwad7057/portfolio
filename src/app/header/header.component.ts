import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  displayText  = signal<string>('');
  showCursor   = signal<boolean>(true);

  private readonly roles = [
    'Frontend Engineer',
    'Angular Developer',
    'React Developer',
    'Web Developer'
  ];

  private roleIndex  = 0;
  private charIndex  = 0;
  private isDeleting = false;
  private typingTimer?: ReturnType<typeof setTimeout>;
  private cursorTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.typeLoop();
    this.cursorTimer = setInterval(() => this.showCursor.update(v => !v), 530);
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
    clearInterval(this.cursorTimer);
  }

  private typeLoop(): void {
    const current = this.roles[this.roleIndex];

    if (!this.isDeleting) {
      this.charIndex++;
      this.displayText.set(current.slice(0, this.charIndex));

      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.typingTimer = setTimeout(() => this.typeLoop(), 1800);
        return;
      }
    } else {
      this.charIndex--;
      this.displayText.set(current.slice(0, this.charIndex));

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.typingTimer = setTimeout(() => this.typeLoop(), 300);
        return;
      }
    }

    this.typingTimer = setTimeout(() => this.typeLoop(), this.isDeleting ? 50 : 90);
  }
}
