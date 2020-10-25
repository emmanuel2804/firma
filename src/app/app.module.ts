import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SignaturePadModule } from 'angular2-signaturepad';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandwriteComponent } from './handwrite/handwrite.component';
import { FontcoolComponent } from './fontcool/fontcool.component';
import { SignComponent } from './sign/sign.component';
import { BeginComponent } from './begin/begin.component';
import { SelfieComponent } from './selfie/selfie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CedulaComponent } from './cedula/cedula.component';
import { ShowQrComponent } from './show-qr/show-qr.component';
import { QRCodeModule } from 'angularx-qrcode';
import { JwtWorkComponent } from './jwt-work/jwt-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HandwriteComponent,
    FontcoolComponent,
    SignComponent,
    BeginComponent,
    SelfieComponent,
    NavbarComponent,
    CedulaComponent,
    ShowQrComponent,
    JwtWorkComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SignaturePadModule, QRCodeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
