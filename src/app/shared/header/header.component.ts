import { Component, OnInit } from '@angular/core';
import { ReusableService } from 'src/app/services/api/reusable.service';

@Component({
  selector: 'poke-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  games: { name: string; url: string }[] = [];
  constructor(private reusableService: ReusableService) {}

  ngOnInit(): void {
    this.getGameVersion();
  }
  getGameVersion() {
    this.reusableService.getMethod('version').subscribe((res) => {
      this.games = res.results;
      console.log(this.games);
    });
  }
}
