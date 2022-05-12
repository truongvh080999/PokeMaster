import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides: { id: string; src: string }[] = [
    { id: '1', src: 'https://youtu.be/D0zYJ1RQ-fs' },
    { id: '2', src: 'https://youtu.be/1roy4o4tqQM' },
    { id: '3', src: 'https://youtu.be/bILE5BEyhdo' },
    { id: '4', src: 'https://youtu.be/uBYORdr_TY8' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
