import { Component, OnInit } from '@angular/core';
// import { JWK, JWS, JWT } from 'jose';
import { RSA_PRIVATE_KEY, RSA_PRIVATE_KEY_CA, pass } from './utils';
import { sign } from 'jsonwebtoken';
import { JWK, JWS } from 'node-jose';
// const { JWT } = require('jose');
import * as rs from 'jsrsasign';

@Component({
  selector: 'app-jwt-work',
  templateUrl: './jwt-work.component.html',
  styleUrls: ['./jwt-work.component.css'],
})
export class JwtWorkComponent implements OnInit {
  constructor() {
    this.testjsrsasign();
  }

  testJose() {
    console.log(RSA_PRIVATE_KEY);
    var prvKey = rs.KEYUTIL.getKey(RSA_PRIVATE_KEY, pass);
    console.log(prvKey);

    // error getCurves is not a function
    // https://github.com/panva/jose/issues/72 (import JWK con const, no sirve)
    // let joseRSAKey = JWK.asKey(RSA_PRIVATE_KEY);
    // console.log(joseRSAKey);

    // siguiente paso, usar JWT.sign que recibe un JWK.Key
  }

  testJsonwebtoken() {
    // error
    // Cannot read property 'isZero' of undefined
    // ----------------
    // https://community.auth0.com/t/cannot-read-property-iszero-of-undefined/20972
    // sin solucion
    return sign({ foo: 'bar', key: pass }, RSA_PRIVATE_KEY_CA, {
      algorithm: 'RS256',
    });
  }

  async testNodeJose() {
    let keystore = JWK.createKeyStore();
    let key = await JWK.asKey(RSA_PRIVATE_KEY_CA, 'pem');
    console.log(key);

    let payload = JSON.stringify({
      sub: '1234567890',
      name: 'Eric D.',
      role: 'admin',
      iat: 1516239022,
    });

    // unsupported algorithm
    // pero si pruebo con RS256 que es el que viene
    // en los ejemplos me da el mismo error
    // puede que el problema sea con el algoritmo utilizado para cifrar la llave
    let token = await JWS.createSign({ alg: 'PS256', format: 'JWT' }, key)
      .update(payload, 'utf8')
      .final();
    console.log(token);
  }

  testjsrsasign() {
    let prvKey = rs.KEYUTIL.getKey(RSA_PRIVATE_KEY, pass);

    // let sig = new rs.crypto.Signature({ alg: 'SHA1withRSA' });
    // sig.init(prvKey);
    // sig.updateString('esto es un string de prueba');
    // let sigVal = sig.sign();
    var sigVal = rs.jws.JWS.sign(
      null,
      '{"alg":"PS256"}',
      '{"age": 21}',
      prvKey
    );
    console.log(sigVal);
  }

  ngOnInit(): void {}
}
