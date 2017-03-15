import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the Weapon provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Weapon {
  name: string;
  attackBonus: number;
  critical: number;
  type: string;
  range: number;
  ammunition: number;
  damage: number;

  constructor(name: string, attackBonus: number, critical: number, type: string, range: number, ammunition: number, damage: number) {
    this.name = name;
    this.attackBonus = attackBonus;
    this.critical = critical;
    this.type = type;
    this.range = range;
    this.ammunition = ammunition;
    this.damage = damage;
  }
}
