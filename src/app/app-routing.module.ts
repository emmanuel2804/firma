import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeginComponent } from './begin/begin.component';
import { CedulaComponent } from './cedula/cedula.component';
import { FontcoolComponent } from './fontcool/fontcool.component';
import { HandwriteComponent } from './handwrite/handwrite.component';
import { JwtWorkComponent } from './jwt-work/jwt-work.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelfieComponent } from './selfie/selfie.component';
import { ShowQrComponent } from './show-qr/show-qr.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  // { path: '', component: ShowQrComponent },
  { path: '', component: JwtWorkComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'selfie', component: SelfieComponent },
  { path: 'cedula', component: CedulaComponent },
  { path: 'begin', component: BeginComponent },
  { path: 'sign', component: SignComponent },
  { path: 'fontcool', component: FontcoolComponent },
  { path: 'handwrite', component: HandwriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
