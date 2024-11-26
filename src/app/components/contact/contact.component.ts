import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section id="contact" class="contact" dir="rtl">
      <div class="container">
        <h2>יצירת קשר</h2>
        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-item">
              <fa-icon [icon]="locationIcon"></fa-icon>
              <h3>כתובת</h3>
              <p>
                <a href="https://www.google.com/maps/search/?api=1&query=מבוא+ים+27+קרית+גת" target="_blank" rel="noopener noreferrer">רחוב מבוא ים 27, קרית גת</a>
              </p>
              <p>(מרכז מסחרי מעל השוק)</p>
            </div>

            <div class="info-item">
              <fa-icon [icon]="phoneIcon"></fa-icon>
              <h3>טלפון</h3>
              <p><a href="tel:+972-8-123-4567" dir="ltr">053-942-2427</a></p>
            </div>

            <div class="info-item">
              <fa-icon [icon]="emailIcon"></fa-icon>
              <h3>דוא״ל</h3>
              <p><a href="mailto:info&#64;stam-judaica.co.il">info&#64;stam-judaica.co.il</a></p>
            </div>

            <div class="info-item">
              <fa-icon [icon]="clockIcon"></fa-icon>
              <h3>שעות פתיחה</h3>
              <p>ראשון-חמישי: 9:00-18:00</p>
              <p>שישי: 9:00-13:00</p>
              <p>שבת: סגור</p>
            </div>
          </div>

          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.8475345575445!2d34.769260!3d31.606725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM2JzI0LjIiTiAzNMKwNDYnMTcuMiJF!5e0!3m2!1sen!2sil!4v1637097345729!5m2!1sen!2sil&q=מבוא+ים+27+קרית+גת"
              width="100%"
              height="400"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .contact {
        padding: 3rem 0;
        background-color: var(--light-gray);
      }

      h2 {
        text-align: center;
        margin-bottom: 3rem;
        color: var(--primary-color);
      }

      .contact-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-unit);
      }

      .contact-info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      .info-item {
        background: white;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
      }

      .info-item fa-icon {
        font-size: 1.5rem;
        color: var(--accent-color);
        margin-bottom: 1rem;
      }

      .info-item h3 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
      }

      .info-item p {
        color: #666;
        margin-bottom: 0.5rem;
      }

      .info-item a {
        color: #666;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .info-item a:hover {
        color: var(--accent-color);
      }

      .info-item p a {
        color: #666;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .info-item p a:hover {
        color: var(--accent-color);
        text-decoration: underline;
      }

      .map-container {
        width: 100%;
        height: 100%;
        min-height: 400px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      @media (max-width: 992px) {
        .contact-grid {
          grid-template-columns: 1fr;
        }

        .contact-info {
          margin-bottom: 2rem;
        }
      }

      @media (max-width: 768px) {
        .contact-info {
          grid-template-columns: 1fr;
        }

        .info-item {
          padding: 1rem;
        }
      }
    `,
  ],
})
export class ContactComponent {
  phoneIcon = faPhone;
  emailIcon = faEnvelope;
  locationIcon = faLocationDot;
  clockIcon = faClock;
}
