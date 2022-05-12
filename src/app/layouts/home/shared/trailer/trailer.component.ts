import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss'],
})
export class TrailerComponent implements OnInit {
  slides: { id: string; src: string }[] = [
    { id: '1', src: 'https://youtube.com/embed/D0zYJ1RQ-fs' },
    { id: '2', src: 'https://youtube.com/embed/1roy4o4tqQM' },
    { id: '3', src: 'https://youtube.com/embed/bILE5BEyhdo' },
    { id: '4', src: 'https://youtube.com/embed/uBYORdr_TY8' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
