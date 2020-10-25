import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fontcool',
  templateUrl: './fontcool.component.html',
  styleUrls: ['./fontcool.component.css'],
})
export class FontcoolComponent implements OnInit {
  fontClass = 'fontcool1';
  active1 = true;
  active2 = false;
  active3 = false;
  constructor() {}

  ngOnInit(): void {}

  onClick1() {
    this.active1 = true;
    this.active2 = false;
    this.active3 = false;
    this.fontClass = 'fontcool1';
  }

  onClick2() {
    this.active1 = false;
    this.active2 = true;
    this.active3 = false;
    this.fontClass = 'fontcool2';
  }

  onClick3() {
    this.active1 = false;
    this.active2 = false;
    this.active3 = true;
    this.fontClass = 'fontcool3';
  }
}
