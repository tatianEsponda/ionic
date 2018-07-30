import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the Inicio2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  
  selector: 'page-inicio2',
  templateUrl: 'inicio2.html',
})
export class Inicio2Page {

  constructor( private iab: InAppBrowser, public platform: Platform) {
  const options: InAppBrowserOptions={
    zoom:'no'
  }
     this.iab.create('http://www.uceva.edu.co/index.php/bienestar-info-general','_self',options);
    
    
  }

  

}
