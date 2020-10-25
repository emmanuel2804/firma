import { Component, OnInit } from '@angular/core';
import { JWK, JWS, JWT } from 'jose';
import * as utils from './utils';

@Component({
  selector: 'app-jwt-work',
  templateUrl: './jwt-work.component.html',
  styleUrls: ['./jwt-work.component.css'],
})
export class JwtWorkComponent implements OnInit {
  jwtBearerToken;

  constructor() {
    console.log(utils.RSA_PRIVATE_KEY);
    var rs = require('jsrsasign');
    var prvKey = rs.KEYUTIL.getKey(utils.RSA_PRIVATE_KEY, utils.pass);
    console.log(prvKey);

    let joseRSAKey = JWK.asKey(utils.RSA_PRIVATE_KEY);
    console.log(joseRSAKey);
  }

  ngOnInit(): void {}
}
