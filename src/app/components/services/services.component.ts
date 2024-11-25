import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services" dir="rtl">
      <div class="container">
        <h2>שירותי סת״ם ומוצרי יודאיקה</h2>

        <!-- STaM Services -->
        <h3 class="category-title">שירותי סת״ם</h3>
        <div class="services-grid">
          <div class="service-card torah-scroll" [style.backgroundImage]="'url(' + imageUrl_TorahScroll + ')'">
            >
            <div class="bg-image"></div>
            <div class="content">
              <h3>ספרי תורה</h3>
              <ul>
                <li>כתיבת ספר תורה מהודר</li>
                <li>שירותי תיקון והגהה</li>
                <li>תעודת הכשר והסמכה</li>
              </ul>
            </div>
          </div>
          <div class="service-card tefillin" [style.backgroundImage]="'url(' + imageUrl_Tefillin + ')'">
            <div class="bg-image"></div>
            <div class="content">
              <h3>תפילין</h3>
              <ul>
                <li>תפילין חדשות</li>
                <li>בדיקת תפילין</li>
                <li>ייעוץ מקצועי</li>
              </ul>
            </div>
          </div>
          <div class="service-card mezuzah" [style.backgroundImage]="'url(' + imageUrl_Mezuzah + ')'">
            <div class="bg-image"></div>
            <div class="content">
              <h3>מזוזות</h3>
              <ul>
                <li>מזוזות מהודרות</li>
                <li>שירותי בדיקה</li>
                <li>הדרכה להתקנה נכונה</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <section id="products" class="products" dir="rtl">
          <div class="container">
            <h2>המוצרים שלנו</h2>
            <!-- Prayer Items -->
            <h3 class="category-title">תשמישי תפילה</h3>
            <div class="services-grid">
              <div class="service-card tallit" [style.backgroundImage]="'url(' + imageUrl_Tallit + ')'">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>טליתות</h3>
                  <ul>
                    <li>טליתות מצמר איכותי</li>
                    <li>טליתות קטן</li>
                    <li>תיקי טלית מהודרים</li>
                  </ul>
                </div>
              </div>
              <div class="service-card kippah" [style.backgroundImage]="'url(' + imageUrl_Kippah + ')'">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>כיפות</h3>
                  <ul>
                    <li>כיפות סרוגות</li>
                    <li>כיפות קטיפה</li>
                    <li>כיפות מעוצבות</li>
                  </ul>
                </div>
              </div>
              <div class="service-card siddur" [style.backgroundImage]="'url(' + imageUrl_Siddur + ')'">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>סידורים</h3>
                  <ul>
                    <li>סידורים מכל הנוסחים</li>
                    <li>מחזורים לחגים</li>
                    <li>ספרי תהילים</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Holiday Items -->
            <h3 class="category-title">חפצי חג ושבת</h3>
            <div class="services-grid">
              <div class="service-card shabbat" [style.backgroundImage]="'url(' + imageUrl_Shabbat + ')'">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>תשמישי שבת</h3>
                  <ul>
                    <li>פמוטים וחנוכיות</li>
                    <li>גביעי קידוש</li>
                    <li>חלות ופלטות שבת</li>
                  </ul>
                </div>
              </div>
              <div class="service-card holidays" [style.backgroundImage]="'url(' + imageUrl_Holidays + ')'">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>מוצרי חגים</h3>
                  <ul>
                    <li>שופרות מהודרים</li>
                    <li>הגדות לפסח</li>
                    <li>סביבונים ונרות</li>
                  </ul>
                </div>
              </div>
              <div class="service-card kitchenware" [style.backgroundImage]="'url(' + imageUrl_Kitchenware + ')'">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>כלי מטבח</h3>
                  <ul>
                    <li>כלים לפסח</li>
                    <li>סירים וכלי בישול</li>
                    <li>כלי הגשה מהודרים</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Jewelry and Art -->
            <h3 class="category-title">תכשיטים ואומנות</h3>
            <div class="services-grid">
              <div class="service-card jewelry" [style.backgroundImage]="'url(' + imageUrl_Jewelry + ')'">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>תכשיטים</h3>
                  <ul>
                    <li>מגן דוד</li>
                    <li>חמסות</li>
                    <li>תכשיטי אבן ירושלמית</li>
                  </ul>
                </div>
              </div>
              <div class="service-card art" [style.backgroundImage]="'url(' + imageUrl_Art + ')'">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>אומנות</h3>
                  <ul>
                    <li>הדפסים ותמונות</li>
                    <li>שטיחי קיר</li>
                    <li>כלי נוי מעוצבים</li>
                  </ul>
                </div>
              </div>
              <div class="service-card books" [style.backgroundImage]="'url(' + imageUrl_Books + ')'">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>ספרים ומוזיקה</h3>
                  <ul>
                    <li>ספרי קודש</li>
                    <li>מוזיקה יהודית</li>
                    <li>ספרי ילדים</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  `,
  styles: [
    `
      .services {
        padding: 5rem 0;
        background-color: var(--secondary-color);
      }

      h2 {
        text-align: center;
        margin-bottom: 3rem;
        color: var(--primary-color);
        font-size: 2.5rem;
      }

      .category-title {
        text-align: center;
        color: var(--primary-color);
        font-size: 1.8rem;
        margin: 4rem 0 2rem;
        position: relative;
      }

      .category-title::after {
        content: "";
        display: block;
        width: 60px;
        height: 3px;
        background-color: var(--accent-color);
        margin: 1rem auto 0;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--spacing-unit);
        margin-bottom: 2rem;
      }

      .service-card {
        height: 300px;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        cursor: pointer;
      }

      .bg-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
        background-position: center;
        transition: transform 0.5s ease;
      }

      .service-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(116, 101, 101, 0.7), rgba(116, 101, 101, 0.9));
        transition: all 0.5s ease;
        z-index: 1;
      }

      .service-card:hover {
        transform: translateY(-5px);
      }

      .service-card:hover .bg-image {
        transform: scale(1.1);
      }

      .service-card:hover::before {
        background: linear-gradient(to bottom, rgba(116, 101, 101, 0.8), rgba(116, 101, 101, 0.95));
      }

      /* Background images for all cards */
      /*
      .torah-scroll .bg-image {
        background-image: url(this.imageUrl_TorahScroll);
      }
      .tefillin .bg-image {
        background-image: url(this.imageUrl_Tefillin);
      }
      .mezuzah .bg-image {
        background-image: url(this.imageUrl_Mezuzah);
      }
      .tallit .bg-image {
        background-image: url(this.imageUrl_Tallit);
      }
      .kippah .bg-image {
        background-image: url(this.imageUrl_Kippah);
      }
      .siddur .bg-image {
        background-image: url(this.imageUrl_Siddur);
      }
      .shabbat .bg-image {
        background-image: url(this.imageUrl_Shabbat);
      }
      .holidays .bg-image {
        background-image: url(this.imageUrl_Holidays);
      }
      .kitchenware .bg-image {
        background-image: url(this.imageUrl_Kitchenware);
      }
      .jewelry .bg-image {
        background-image: url(this.imageUrl_Jewelry);
      }
      .art .bg-image {
        background-image: url(this.imageUrl_Art);
      }
      .books .bg-image {
        background-image: url(this.imageUrl_Books);
      }
      */

      .content {
        position: relative;
        z-index: 2;
        padding: 1.5rem;
        color: var(--secondary-color);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .service-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-align: center;
        color: var(--secondary-color);
      }

      .service-card ul {
        list-style: none;
        padding: 0;
        font-size: 1rem;
      }

      .service-card li {
        margin-bottom: 0.75rem;
        padding-right: 1.5rem;
        position: relative;
      }

      .service-card li::before {
        content: "•";
        color: var(--accent-color);
        position: absolute;
        right: 0;
      }

      @media (max-width: 768px) {
        .service-card {
          height: 262.5px;
        }

        .service-card h3 {
          font-size: 1.3rem;
        }

        .service-card ul {
          font-size: 0.9rem;
        }

        .category-title {
          font-size: 1.5rem;
          margin: 3rem 0 1.5rem;
        }
      }
    `,
  ],
})
export class ServicesComponent {
  protected baseImagePath = `url('${environment.production ? "/judaica-store/assets/images/" : "/assets/images/"}')`;

  // protected getImagePath(imageName: string): string {
  //   return `${this.baseImagePath}${imageName}`;
  // }

  protected imageUrl_TorahScroll = environment.production ? "/judaica-store/assets/images/torah-scroll.jpg" : "/assets/images/torah-scroll.jpg";
  protected imageUrl_Tefillin = environment.production ? "/judaica-store/assets/images/tefillin.jpg" : "/assets/images/tefillin.jpg";
  protected imageUrl_Mezuzah = environment.production ? "/judaica-store/assets/images/mezuzah.jpg" : "/assets/images/mezuzah.jpg";
  protected imageUrl_Tallit = environment.production ? "/judaica-store/assets/images/tallit.jpg" : "/assets/images/tallit.jpg";
  protected imageUrl_Kippah = environment.production ? "/judaica-store/assets/images/kippah.jpg" : "/assets/images/kippah.jpg";
  protected imageUrl_Siddur = environment.production ? "/judaica-store/assets/images/siddur.jpg" : "/assets/images/siddur.jpg";
  protected imageUrl_Shabbat = environment.production ? "/judaica-store/assets/images/shabbat.jpg" : "/assets/images/shabbat.jpg";
  protected imageUrl_Holidays = environment.production ? "/judaica-store/assets/images/holidays.jpg" : "/assets/images/holidays.jpg";
  protected imageUrl_Kitchenware = environment.production ? "/judaica-store/assets/images/kitchenware.jpg" : "/assets/images/kitchenware.jpg";
  protected imageUrl_Jewelry = environment.production ? "/judaica-store/assets/images/jewelry.jpg" : "/assets/images/jewelry.jpg";
  protected imageUrl_Art = environment.production ? "/judaica-store/assets/images/art.jpg" : "/assets/images/art.jpg";
  protected imageUrl_Books = environment.production ? "/judaica-store/assets/images/books.jpg" : "/assets/images/books.jpg";
}
