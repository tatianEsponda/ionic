import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Inicio2Page} from '../inicio2/inicio2';
import {HorarioPage} from '../horario/horario';
import {EstadoPage} from '../estado/estado';
import {InicioPage} from '../inicio/inicio';
import {ForoPage} from '../foro/foro';
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
inicio2Page = Inicio2Page;
horarioPage = HorarioPage;
estadoPage = EstadoPage;
inicioPage = InicioPage;
foroPage = ForoPage;
}