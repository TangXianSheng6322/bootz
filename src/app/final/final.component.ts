import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-final',
  imports: [NgIf],
  templateUrl: './final.component.html',
  styleUrl: './final.component.css',
})
export class FinalComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
