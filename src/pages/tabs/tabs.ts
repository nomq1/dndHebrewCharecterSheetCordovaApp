import { Component } from '@angular/core';

import { General } from '../general/general';
import { Attack } from '../attackAndDefence/attackAndDefence';
import {WeaponsPage} from '../weapons/weapons';
import {SpellsPage} from '../spells/spells';
import {QualitysPage} from '../qualitys/qualitys';
import {SkillsPage} from '../skills/skills';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  generalRoot: any = General;
  AttackRoot: any = Attack;
  WeaponsRoot: any = WeaponsPage;
  SpellsRoot: any = SpellsPage;
  QualitysRoot: any = QualitysPage;
  SkillsRoot: any = SkillsPage;
  constructor() {

  }
}
