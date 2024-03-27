import { Component, Input } from '@angular/core';
import { Wonder } from './wonder-model';
import { WondersService } from './wonder-service.service';
import { ShortenPipe } from '../shorten-pipe';

@Component({
  selector: 'app-wonder',
  templateUrl: './wonder.component.html',
  styleUrls: ['./wonder.component.css'],
  standalone: true,
  imports: [ShortenPipe],

})
export class WonderComponent {
  wonders: Wonder[];

  constructor(private wondersService: WondersService) { this.wonders = []; }

  ngOnInit() {
    this.wonders = this.wondersService.getWonders();
  }
}