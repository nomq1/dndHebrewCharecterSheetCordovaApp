import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-attack',
  templateUrl: 'attackAndDefence.html'
})
export class Attack {
  NKPSum:number;
  mystorage:Storage;
  constructor(public navCtrl: NavController , storage: Storage)
  {
    this.NKPSum = -99;
    this.myStorage = storage ;
    storage.ready().then(() => {
      // Or to get a key/value pair
      storage.get('NKPSum').then((val) => {
        this.NKPSum = val ;
      })
    });


  }
  onKey(event: any)
  {
      mystorage.set(event.target.name, event.target.value);
  }

}/**
 * Created by amit on 05/03/2017.
 *//**
 * Created by amit on 05/03/2017.
 */