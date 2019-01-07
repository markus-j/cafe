import { Component, OnInit } from '@angular/core';
//import { Cafe } from '../hero';
import { CAFES } from '../mock-cafes';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {

  title = 'Suomen Kahvilat';
  cafes: Cafe[];
  constructor(private cafeService: CafeService) { }


  ngOnInit() {
    this.getCafes();
  }

  getCafes(): void {
    this.cafeService.getCafes()
        .subscribe(cafes => this.cafes = cafes);
  }
}
