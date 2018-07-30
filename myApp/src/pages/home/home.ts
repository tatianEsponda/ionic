import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

user= {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController,public navParams: NavParams) {

  }


  async login(user: User){
  try{
  const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
  if(result){
  this.navCtrl.setRoot('MenuPage');
  }
}catch(e){
    console.error(e);
  }
  }


  async register(){
    this.navCtrl.push('RegisterPage')
  }
}