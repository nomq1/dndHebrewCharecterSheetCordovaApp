import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {ContactPage} from '../pages/contact/contact';
import {TabsPage} from '../pages/tabs/tabs';
import {General} from '../pages/general/general';
import {Attack} from '../pages/attackAndDefence/attackAndDefence';
import {WeaponsPage} from '../pages/weapons/weapons';
import {WeaponsFormPage} from '../pages/weapons-form/weapons-form';
import {SpellsPage} from '../pages/spells/spells';
import {QualitysPage} from '../pages/qualitys/qualitys';
import {SpellsFormsPage} from '../pages/spells-forms/spells-forms';
import {Storage} from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    Attack,
    TabsPage,
    General,
    WeaponsPage,
    WeaponsFormPage,
    SpellsPage,
    SpellsFormsPage,
    QualitysPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    Attack,
    TabsPage,
    General,
    WeaponsPage,
    WeaponsFormPage,
    SpellsPage,
    SpellsFormsPage,
    QualitysPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {
}
