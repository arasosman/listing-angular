import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'numara';
  path = window.location.pathname;
  path1: boolean;

  constructor() {
    const pathArr = this.path.split('/');
    this.path1 = pathArr[1] !== 'admin';
  }

  ngOnInit() {
  }
}
