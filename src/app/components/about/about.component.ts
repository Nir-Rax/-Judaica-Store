import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about" dir="rtl">
      <div class="container">
        <div class="about-content">
          <h2>אודותינו</h2>
          <div class="content-wrapper">
            <div class="text-content">
              <p>
                ברוכים הבאים לעולם הסת״ם שלנו, מקום בו מסורת עתיקה פוגשת איכות ללא פשרות. כבר למעלה מ-20 שנה, אנו מתמחים בכתיבת ספרי תורה, תפילין ומזוזות ברמה הגבוהה ביותר.
              </p>
              <p>
                הסופרים שלנו, בעלי ניסיון רב ומוסמכים, מקפידים על כל תג ותג בכתיבה מהודרת ומדויקת. אנו מאמינים שכל פריט סת״ם הוא עולם ומלואו, ולכן מקדישים תשומת לב מיוחדת לכל פרט.
              </p>
              <p>
                בנוסף לשירותי הסת״ם, אנו מציעים מגוון רחב של תשמישי קדושה ויודאיקה, כולם נבחרים בקפידה כדי להתאים לסטנדרטים הגבוהים ביותר של הלכה ואיכות.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 5rem 0;
      background-color: var(--light-gray);
    }

    .about-content {
      max-width: 1000px;
      margin: 0 auto;
    }

    h2 {
      text-align: center;
      color: var(--primary-color);
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .content-wrapper {
      display: grid;
      gap: 2rem;
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .text-content {
      line-height: 1.8;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      color: var(--primary-color);
    }

    p:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      .about {
        padding: 3rem 0;
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .content-wrapper {
        padding: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  `]
})
export class AboutComponent {}