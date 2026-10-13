
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {}
