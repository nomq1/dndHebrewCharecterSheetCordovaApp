import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {SQLite} from 'ionic-native';
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
  mGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.weapForm = this.formBuilder.group({
      name: [''],
      attackBonus: [''],
      critical: [''],
      type: [''],
      range: [''],
      ammunition: [''],
      damage: ['']
    });
    SQLite.openDatabase({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLite) => {

        db.executeSql('create table weapons(name VARCHAR(32),)', []).then(() => {
        }).catch(() => {
        });

      })
      .catch(error => console.error('Error opening database', error));
  }

  updateDataBase() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeaponsFormPage');
  }

}
