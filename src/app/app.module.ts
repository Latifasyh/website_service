import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './components/titre/titre.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SportComponent } from './components/sport/sport.component';
import { ScienceComponent } from './components/science/science.component';
import { JeuxComponent } from './components/jeux/jeux.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    NavbarComponent,
    SportComponent,
    ScienceComponent,
    JeuxComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
