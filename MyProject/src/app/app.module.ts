import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './weather/city-list/city-list.component';
import { CityComponent } from './weather/city/city.component';
import { FamilyComponent } from './aboutMe/family/family.component';
import { FriendsComponent } from './aboutMe/friends/friends.component';
import { HobbiesComponent } from './aboutMe/hobbies/hobbies.component';
import { PersonComponent } from './aboutMe/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityComponent,
    FamilyComponent,
    FriendsComponent,
    HobbiesComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
