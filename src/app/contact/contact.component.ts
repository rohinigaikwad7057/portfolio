import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // Signals for reactive state
  formStatus = signal<FormStatus>('idle');
  statusMessage = signal<string>('');

  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Contact info tiles (no phone number)
  contactTiles = [
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Abu Dhabi, UAE',
      href: null,
      ariaLabel: 'Location: Abu Dhabi, UAE'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'rohinigaikwad7057@gmail.com',
      href: 'mailto:rohinigaikwad7057@gmail.com',
      ariaLabel: 'Send email to rohinigaikwad7057@gmail.com'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/rohini-gaikwad7057',
      href: 'https://www.linkedin.com/in/rohini-gaikwad7057/',
      ariaLabel: 'View LinkedIn profile (opens in new tab)'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'github.com/rohinigaikwad7057',
      href: 'https://github.com/rohinigaikwad7057',
      ariaLabel: 'View GitHub profile (opens in new tab)'
    }
  ];

  async onSubmit(form: NgForm): Promise<void> {
    if (!form.valid) return;

    this.formStatus.set('sending');

    // Formspree or EmailJS integration point
    // For portfolio display: simulate sending then show success
    try {
      await this.simulateSend();
      this.formStatus.set('success');
      this.statusMessage.set('Thanks for reaching out! I\'ll get back to you within 24 hours.');
      form.resetForm();
      this.formData = { name: '', email: '', subject: '', message: '' };
    } catch {
      this.formStatus.set('error');
      this.statusMessage.set('Something went wrong. Please email me directly at rohinigaikwad7057@gmail.com');
    }
  }

  resetForm(): void {
    this.formStatus.set('idle');
    this.statusMessage.set('');
  }

  private simulateSend(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 1200));
  }
}
