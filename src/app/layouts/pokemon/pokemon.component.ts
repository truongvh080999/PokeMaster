import { ReusableService } from './../../services/api/reusable.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  data: { name: string; url: string } | { name: string; url: string }[] = [];
  search: FormControl = this.fb.control('');
  filter = {
    offset: 0,
    limit: 20,
  };
  constructor(
    private fb: FormBuilder,
    private reusableService: ReusableService
  ) {
    this.search.valueChanges
      .pipe(
        map((e) => e.value),
        debounceTime(3000)
      )
      .subscribe(this.getData);
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(search?: string) {
    this.reusableService
      .getMethod(`pokemon/${search || ''}`, search ? {} : this.filter)
      .subscribe((res) => {});
  }
}
