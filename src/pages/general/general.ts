import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'page-general',
  templateUrl: 'general.html'
})
export class General {
  private storage: Storage;
  private characterName: string;
  private aligment: string;
  private deity: string;
  private homeland: string;
  private race: string;
  private size: string;
  private gender: string;
  private age: string;
  private heigth: number;
  private weigth: number;
  private hair: string;
  private eyes: string;
  private rank: number;
  private exp: number;

  constructor(public navCtrl: NavController, storage: Storage) {
    this.storage = storage;
    storage.ready().then(() => {
        storage.get("characterName").then((val) => {
          this.characterName = val;
        });
        storage.get("aligment").then((val) => {
          this.aligment = val;
        });
        storage.get("deity").then((val) => {
          this.deity = val;
        });
        storage.get("homeland").then((val) => {
          this.homeland = val;
        });
        storage.get("race").then((val) => {
          this.race = val;
        });
        storage.get("size").then((val) => {
          this.size = val;
        });
        storage.get("gender").then((val) => {
          this.gender = val;
        });
        storage.get("age").then((val) => {
          this.age = val;
        });
        storage.get("heigth").then((val) => {
          this.heigth = val;
        });
        storage.get("weigth").then((val) => {
          this.weigth = val;
        });
        storage.get("hair").then((val) => {
          this.hair = val;
        });
        storage.get("eyes").then((val) => {
          this.eyes = val;
        });
        storage.get("rank").then((val) => {
          this.rank = val;
        });
        storage.get("exp").then((val) => {
          this.exp = val;
        });
      }
    );

  }

  onKey(event: any) {
    console.log("onKeyEvent");
    this.storage.set(event.target.name, event.target.value);
  }

}
/**
 * Created by amit on 05/03/2017.
 */
