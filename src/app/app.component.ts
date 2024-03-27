import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WonderComponent } from './wonder/wonder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WonderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'seven-wonders';
}
