import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {Weapon} from '../../providers/weapon';
import {Events} from 'ionic-angular'
/*
 Generated class for the WeaponsForm page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-weapons-form',
  templateUrl: 'weapons-form.html'
})
export class WeaponsFormPage {
  private weapForm: FormGroup;
  private weapArr: Weapon[];
  private storage: Storage;
  private events: Events;
  private weapon: Weapon;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, storage: Storage, events: Events) {
    let weapon = navParams.get('editedWeapon');
    this.weapon = weapon;
    if (weapon == undefined) {
      this.weapon = new Weapon("", 0, 0, "", 0, 0, 0);
    }

    this.weapForm = this.formBuilder.group({
      name: [this.weapon.name],
      attackBonus: [this.weapon.attackBonus],
      critical: [this.weapon.critical],
      type: [this.weapon.type],
      range: [this.weapon.range],
      ammunition: [this.weapon.ammunition],
      damage: [this.weapon.damage]
    });

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


  }

  updateDataBase() {
    let data = this.weapForm.value;
    let weap = new Weapon(data.name, data.attackBonus, data.critical, data.type, data.range, data.ammunition, data.damage);
    if (this.navParams.get('weaponIndex') != undefined) {
      this.storage.get('weaponsArr').then((val) => {
        val[this.navParams.get('weaponIndex')] = weap;
        this.storage.set('weaponsArr', val);
      });
    } else {
      this.storage.get('weaponsArr').then((val) => {
        val.push(weap);
        this.storage.set('weaponsArr', val);

      });
    }
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeaponsFormPage');
  }

}
