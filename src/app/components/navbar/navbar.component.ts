
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private translate = inject(TranslateService);

  changeLanguage(lang: 'en' | 'pt'): void {
    this.translate.use(lang);
  }
}
