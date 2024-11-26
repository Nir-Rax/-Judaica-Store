import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="home" dir="rtl">
      <img src="/judaica-store/assets/logo.png" alt="Stam Judaica Logo" class="hero-logo" />
      <div class="overlay">
        <div class="container">
          <div class="hero-content">
            <h1>לשם יחוד</h1>
            <p>אומנות קדושה בכתיבת ספרי תורה, תפילין ומזוזות</p>
            <button class="btn btn-primary" (click)="scrollToContact()">צור קשר עכשיו</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        height: 50vh;
        background: url("/judaica-store/assets/images/judaica-bg.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        margin-top: -80px;
      }

      .overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(to bottom, rgba(116, 101, 101, 0.85), rgba(116, 101, 101, 0.7));
        display: flex;
        align-items: center;
      }

      .hero-content {
        color: var(--secondary-color);
        text-align: center;
        max-width: 800px;
        margin: 120px auto 0;
        padding: 2rem;
      }

      h1 {
        font-family: "Frank Ruhl Libre", serif;
        font-size: 4rem;
        margin-bottom: 1.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }

      p {
        font-size: 1.5rem;
        margin-bottom: 2.5rem;
        line-height: 1.6;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
      }

      .btn {
        padding: 1rem 2.5rem;
        font-size: 1.2rem;
        background-color: var(--accent-color);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .btn:hover {
        background-color: #b08c50;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 768px) {
        h1 {
          font-size: 3rem;
        }

        p {
          font-size: 1.25rem;
        }

        .btn {
          padding: 0.875rem 2rem;
          font-size: 1.1rem;
        }
      }

      @media (max-width: 480px) {
        h1 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1.1rem;
        }
      }

      .hero-logo {
        position: absolute;
        top: 7rem;
        right: 2rem;
        width: 180px;
        height: auto;
        opacity: 0.7;
        z-index: 10;
      }

      @media (max-width: 768px) {
        .hero-logo {
          width: 115px;
          top: 7rem;
          right: 1rem;
        }
      }
    `,
  ],
})
export class HeroComponent {
  scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
}
