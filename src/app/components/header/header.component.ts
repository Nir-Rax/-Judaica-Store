import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class.scrolled]="isScrolled" dir="rtl">
      <div class="container">
        <nav>
          <div class="nav-links" [class.active]="isMenuOpen">
            <a (click)="scrollToSection('home')">דף הבית</a>
            <a (click)="scrollToSection('services')">שירותי סת״ם</a>
            <a (click)="scrollToSection('about')">אודותינו</a>
            <a (click)="scrollToSection('store')">חנות</a>
            <a (click)="scrollToSection('contact')">יצירת קשר</a>
          </div>
          <button class="mobile-menu" (click)="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1000;
      background: transparent;
      transition: all 0.3s ease;
      height: 80px;
      display: flex;
      align-items: center;
    }

    header.scrolled {
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    header.scrolled .logo,
    header.scrolled .nav-links a {
      color: var(--primary-color);
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .logo {
      font-family: 'Frank Ruhl Libre', serif;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--secondary-color);
      transition: color 0.3s ease;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      color: var(--secondary-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      cursor: pointer;
    }

    .nav-links a:hover {
      color: var(--accent-color);
    }

    .mobile-menu {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
    }

    .mobile-menu span {
      display: block;
      width: 25px;
      height: 3px;
      background: var(--secondary-color);
      margin: 5px 0;
      transition: 0.3s;
    }

    header.scrolled .mobile-menu span {
      background: var(--primary-color);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        background: white;
        padding: 1rem;
        flex-direction: column;
        text-align: center;
      }

      .nav-links.active {
        display: flex;
      }

      .nav-links a {
        color: var(--primary-color);
        padding: 0.5rem 0;
      }

      .mobile-menu {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after clicking
      this.isMenuOpen = false;
    }
  }
}