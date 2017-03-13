import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {TabsPage} from '../pages/tabs/tabs';
import {General} from '../pages/general/general';
import {Attack} from '../pages/attackAndDefence/attackAndDefence';
import {WeponsPage} from '../pages/wepons/wepons';
import {Storage} from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    Attack,
    TabsPage,
    General,
    WeponsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    Attack,
    TabsPage,
    General,
    WeponsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {
}
