import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{ AngularFireModule} from "angularfire2";
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './app.firebase.config';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Inicio2Page} from '../pages/inicio2/inicio2';
import {InicioPage} from '../pages/inicio/inicio';
import {HorarioPage} from '../pages/horario/horario';
import {EstadoPage} from '../pages/estado/estado'
import {ForoPage} from '../pages/foro/foro';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {Push} from '@ionic-native/push';
@NgModule({
  declarations: [
    MyApp,
    Inicio2Page,
    HorarioPage,
    EstadoPage,
    InicioPage,
    ForoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Inicio2Page,
    HorarioPage,
    EstadoPage,
    InicioPage,
    ForoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
  ]
})
export class AppModule {}
