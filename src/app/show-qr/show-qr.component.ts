import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-qr',
  templateUrl: './show-qr.component.html',
  styleUrls: ['./show-qr.component.css'],
})
export class ShowQrComponent implements OnInit {
  public mobileUrl: string = null;
  constructor() {
    this.mobileUrl = '96042807224';
  }

  ngOnInit(): void {}
}
