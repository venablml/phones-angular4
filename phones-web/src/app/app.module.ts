import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { PhoneEffects } from './phones/api/phoneEffects'
import { Phone } from './phones/phone'
import { PhoneService } from './phones/api/phoneService'
import { PhoneListContainer } from './phones/PhoneListContainer'
import { PhoneDetailsContainer } from './phones/PhoneDetailsContainer'
import { TitlebarContainer } from './titlebar/TitlebarContainer'
import { AppComponent } from './app.component'

import { selectedPhoneReducer } from './phones/api/selectedPhoneReducer'
import { phonesReducer } from './phones/api/phonesReducer'

export const appRoutes: Routes = [
  { path: 'phones', component: PhoneListContainer },
  { path: 'phones/:id', component: PhoneDetailsContainer },
  { path: '', redirectTo: '/phones', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainer,
    PhoneDetailsContainer,
    TitlebarContainer
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({
      selectedPhoneId: selectedPhoneReducer,
      phones: phonesReducer
    }),
    EffectsModule.run(PhoneEffects)
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule {}

export interface AppState {
  selectedPhoneId: number
  phones: Phone[]
}
