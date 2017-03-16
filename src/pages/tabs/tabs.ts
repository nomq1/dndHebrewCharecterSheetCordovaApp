import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { General } from '../general/general';
import { Attack } from '../attackAndDefence/attackAndDefence';
import {WeaponsPage} from '../weapons/weapons';
import {SpellsPage} from '../spells/spells';
import {QualitysPage} from '../qualitys/qualitys';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  generalRoot: any = General;
  AttackRoot: any = Attack;
  WeaponsRoot: any = WeaponsPage;
  SpellsRoot: any = SpellsPage;
  QualitysRoot: any = QualitysPage;
  constructor() {

  }
}
