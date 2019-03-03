import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NumberService} from '../services/number.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
  providers: [NumberService]
})
export class NumberComponent implements OnInit {

  constructor( private http: HttpClient,
               private numberService: NumberService
  ) { }

  ngOnInit() {
  }

}
