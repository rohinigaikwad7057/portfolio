import { Component } from '@angular/core';

interface ProfileStat {
  value: string;
  label: string;
  icon: string;
}

interface AboutDetail {
  label: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  stats: ProfileStat[] = [
    { value: '3.6+', label: 'Years of experience', icon: 'fas fa-briefcase' },
  ];

  details: AboutDetail[] = [
    { label: 'Location',     value: 'Abu Dhabi, UAE',           icon: 'fas fa-map-marker-alt'  },
    { label: 'Experience',   value: '3.6 years',                icon: 'fas fa-clock'           },
    { label: 'Speciality',   value: 'Angular & React',     icon: 'fas fa-layer-group'     },
    { label: 'Education',    value: 'B.E. Computer Engineering', icon: 'fas fa-graduation-cap' },
    { label: 'Languages',    value: 'English, Marathi, Hindi',  icon: 'fas fa-language'        },
    { label: 'Availability', value: 'Open to opportunities',    icon: 'fas fa-check-circle'    },
  ];
}
