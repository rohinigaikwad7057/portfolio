import {
  Component, OnInit, OnDestroy, signal, computed,
  HostListener, inject, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { NavLink } from '../shared/models/portfolio.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  // Signals
  activeSection = signal<string>('home-section');
  isScrolled     = signal<boolean>(false);
  isMobileOpen   = signal<boolean>(false);

  // Computed
  navClasses = computed(() => ({
    'nav--scrolled': this.isScrolled(),
    'nav--open':     this.isMobileOpen()
  }));

  navLinks: NavLink[] = [
    { label: 'Home',     href: '#home-section',    sectionId: 'home-section'    },
    { label: 'About',    href: '#about-section',   sectionId: 'about-section'   },
    { label: 'Skills',   href: '#skills-section',  sectionId: 'skills-section'  },
    { label: 'Resume',   href: '#resume-section',  sectionId: 'resume-section'  },
    { label: 'Projects', href: '#project-section', sectionId: 'project-section' },
    { label: 'Contact',  href: '#contact-section', sectionId: 'contact-section' },
  ];

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.initIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleMobileMenu(): void {
    this.isMobileOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileOpen.set(false);
  }

  isActive(sectionId: string): boolean {
    return this.activeSection() === sectionId;
  }

  private initIntersectionObserver(): void {
    const options: IntersectionObserverInit = {
      rootMargin: `-${72}px 0px -55% 0px`,
      threshold: 0
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(s => this.observer!.observe(s));
  }
}
