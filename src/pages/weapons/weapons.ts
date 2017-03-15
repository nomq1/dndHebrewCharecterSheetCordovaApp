import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Weapon} from '../../providers/weapon';
import {WeaponsFormPage} from '../weapons-form/weapons-form';
import {Events} from 'ionic-angular'


/*
 Generated class for the Weapons page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-weapons',
  templateUrl: 'weapons.html'
})
export class WeaponsPage {
  private storage: Storage;
  private weapArr: Weapon[];
  private events: Events;

  constructor(public navCtrl: NavController, public navParams: NavParams, storage: Storage, events: Events) {
    storage.ready().then(() => {
      storage.get('weaponsArr').then((val) => {
        if (val != undefined) {
          this.weapArr = val;
        }
        else {
          this.weapArr = [];
          storage.set("weaponsArr", this.weapArr);
        }
      })
    });

    this.storage = storage;
    this.events = events;
    this.events.subscribe('reloadWep', () => {
      this.navCtrl.pop();
      this.navCtrl.push(WeaponsPage);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WeaponsPage');
  }

  ionViewWillEnter() {
    this.storage.get('weaponsArr').then((val) => {
      if (val != undefined) {
        this.weapArr = val;
      }
      else {
        this.weapArr = [];
        this.storage.set("weaponsArr", this.weapArr);
      }
    })
  }

  addWeapon() {
    this.navCtrl.push(WeaponsFormPage);
  }

  delWeapon(Weap: Weapon) {
    let index = this.weapArr.indexOf(Weap);
    if (index > -1) {
      this.weapArr.splice(index, 1);
      this.storage.set("weaponsArr", this.weapArr);
    }
    console.log("deleating " + Weap);
  }

}
