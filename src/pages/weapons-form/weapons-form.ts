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

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, storage: Storage, events: Events) {
    this.weapForm = this.formBuilder.group({
      name: [''],
      attackBonus: [''],
      critical: [''],
      type: [''],
      range: [''],
      ammunition: [''],
      damage: ['']
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
    //this.storage.ready().then(
    //  () => {
    this.storage.get('weaponsArr').then((val) => {
      val.push(weap);
      this.storage.set('weaponsArr', val);

    });
    //  }
    //);
    //this.events.publish('reloadWep');
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeaponsFormPage');
  }

}
