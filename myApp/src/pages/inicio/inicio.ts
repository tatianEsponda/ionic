import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slider = [
    
    {
      title: 'Crea un Patrón de Trabajo',
      description: 'Crear un patron de "sin movil"para agilizar tu productividad y dejar de procrastinar',
      image: "assets/imgs/pro.png"
    },{
      title: 'Mantén viva a tu mascota',
      description: 'Diariamente concéntrate en otras actividades, y mantén viva a tu mascota con tu tiempo sin el movil',
      image: "assets/imgs/mascota.png"
    },
    {
      title: 'Concéntrate',
      description: 'En los proximos 30 minutos adoptaras una mascota la cual se alimentara mientras trabajas',
      image: "assets/imgs/mascota1.jpg"
    },
    {
      title: 'Crea tu Refugio de Mascotas',
      description: 'Cuanto más trabajas ,Más refugios tienes a cargo y más ayudas a salvar mascotas en la vida Real',
      image: "assets/imgs/refugio.jpg"
    },
    {
      title: 'No te Distraigas',
      description: 'Tu mascota morirá si abandonas esta app antes de lo acordado',
      image: "assets/imgs/muerte.jpg"
    }
  ];

}
