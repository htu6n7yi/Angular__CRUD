import { HeaderComponent } from './shared/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './views/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
}
