import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DhrSideMenuComponent } from 'dhr-side-menu'
import { TitleColor } from '../../../dhr-side-menu/src/lib/dhr-side-menu.component';

@Component({
  selector: 'app-root',
  imports: [ DhrSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dhr-testbed-app';

  TitleColor = TitleColor;
  isAuthenticated = signal(true);
}
