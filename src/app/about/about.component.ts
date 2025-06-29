import { Component } from '@angular/core';
import { LogoLineComponent } from '../logo-line/logo-line.component';

@Component({
  selector: 'app-about',
  imports: [LogoLineComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
