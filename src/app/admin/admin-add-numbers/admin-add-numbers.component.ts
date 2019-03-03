import {Component, OnInit} from '@angular/core';
import {NumberService} from '../../services/number.service';
import {Number} from '../../number/number';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-add-numbers',
  templateUrl: './admin-add-numbers.component.html',
  styleUrls: ['./admin-add-numbers.component.css'],
  providers: [NumberService]
})


export class AdminAddNumbersComponent implements OnInit {

  constructor( private numberService: NumberService) {
  }

  number: Number = new Number();

  ngOnInit() {
  }

  add(form: NgForm) {
    this.numberService.addNumber(this.number).subscribe((data) => {
      alert('Success add ' + data.number);
    });
  }

}
