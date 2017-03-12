import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-attack',
  templateUrl: 'attackAndDefence.html'
})
export class Attack {
  NKPSum: number;
  private NKPDR: number;
  private NKPCurrent: number;
  private NKPNonLethal: number;
  private InitiativeSum: number;
  private InitiativeDex: number;
  private InitiativeMisc: number;
  private FortitudeSum: number;
  private FortitudeBase: number;
  private FortitudeAbility: number;
  private FortitudeMagic: number;
  private FortitudeMisc: number;
  private FortitudeTemp: number;
  private ReflaxBase: number;
  private ReflaxAbility: number;
  private ReflaxMagic: number;
  private ReflaxMisc: number;
  private ReflaxTemp: number;

  private willBase: number;
  private willAbility: number;
  private willMagic: number;
  private willMisc: number;
  private willTemp: number;

  private AcArmorBonus: number;
  private AcShildBonus: number;
  private AcDexModifier: number;
  private AcSizemoidifier: number;
  private AcNaturalArmor: number;
  private AcDeflactionModifier: number;
  private AcMiscModifier: number;

  private AcTouch: number;
  private AcFlatFooted: number;

  private BaseAttackBonus: number;
  private SpellResistanse: number;

  private CMBStr: number;
  private CMBSize: number;
  private CMBMisc: number;

  private CMDStr: number;
  private CMDDex: number;
  private CMDSize: number;


  mystorage: Storage;

  constructor(public navCtrl: NavController, storage: Storage) {
    this.mystorage = storage;
    storage.ready().then(() => {
      // Or to get a key/value pair
      storage.get('NKPDR').then((val) => {
        this.NKPDR = val;
      })
      storage.get('NKPCurrent').then((val) => {
        this.NKPCurrent = val;
      })
      storage.get('NKPNonLethal').then((val) => {
        this.NKPNonLethal = val;
      })

      storage.get('InitiativeDex').then((val) => {
        this.InitiativeDex = val;
      })

      storage.get('InitiativeMisc').then((val) => {
        this.InitiativeMisc = val;
      })

      storage.get('FortitudeTemp').then((val) => {
        this.FortitudeTemp = val;
      })
      storage.get('FortitudeBase').then((val) => {
        this.FortitudeBase = val;
      })
      storage.get('FortitudeAbility').then((val) => {
        this.FortitudeAbility = val;
      })
      storage.get('FortitudeMagic').then((val) => {
        this.FortitudeMagic = val;
      })
      storage.get('FortitudeMisc').then((val) => {
        this.FortitudeMisc = val;
      })

      storage.get('ReflaxTemp').then((val) => {
        this.ReflaxTemp = val;
      })
      storage.get('ReflaxBase').then((val) => {
        this.ReflaxBase = val;
      })
      storage.get('ReflaxAbility').then((val) => {
        this.ReflaxAbility = val;
      })
      storage.get('ReflaxMagic').then((val) => {
        this.ReflaxMagic = val;
      })
      storage.get('ReflaxMisc').then((val) => {
        this.ReflaxMisc = val;
      })

      storage.get('willTemp').then((val) => {
        this.willTemp = val;
      })
      storage.get('willBase').then((val) => {
        this.willBase = val;
      })
      storage.get('willAbility').then((val) => {
        this.willAbility = val;
      })
      storage.get('willMagic').then((val) => {
        this.willMagic = val;
      })
      storage.get('willMisc').then((val) => {
        this.willMisc = val;
      })

      storage.get('AcArmorBonus').then((val) => {
        this.AcArmorBonus = val;
      })
      storage.get('AcShildBonus').then((val) => {
        this.AcShildBonus = val;
      })
      storage.get('AcDexModifier').then((val) => {
        this.AcDexModifier = val;
      })
      storage.get('AcSizemoidifier').then((val) => {
        this.AcSizemoidifier = val;
      })
      storage.get('AcNaturalArmor').then((val) => {
        this.AcNaturalArmor = val;
      })
      storage.get('AcDeflactionModifier').then((val) => {
        this.AcDeflactionModifier = val;
      })
      storage.get('AcMiscModifier').then((val) => {
        this.AcMiscModifier = val;
      })

      storage.get('AcTouch').then((val) => {
        this.AcTouch = val;
      })
      storage.get('AcFlatFooted').then((val) => {
        this.AcFlatFooted = val;
      })

      storage.get('BaseAttackBonus').then((val) => {
        this.BaseAttackBonus = val;
      })
      storage.get('SpellResistanse').then((val) => {
        this.SpellResistanse = val;
      })

      storage.get('CMBStr').then((val) => {
        this.CMBStr = val;
      })
      storage.get('CMBSize').then((val) => {
        this.CMBSize = val;
      })
      storage.get('CMBMisc').then((val) => {
        this.CMBMisc = val;
      })

      storage.get('CMDStr').then((val) => {
        this.CMDStr = val;
      })
      storage.get('CMDDex').then((val) => {
        this.CMDDex = val;
      })
      storage.get('CMDSize').then((val) => {
        this.CMDSize = val;
      })

    });


  }

  onKey(event: any) {
    this.mystorage.set(event.target.name, event.target.value);
  }

}
/**
 * Created by amit on 05/03/2017.
 *//**
 * Created by amit on 05/03/2017.
 */
