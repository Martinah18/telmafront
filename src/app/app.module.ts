import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HistoriqueAppelComponent } from './components/historique-appel/historique-appel.component';
import { AppelTypeComponent } from './components/appel-type/appel-type.component';
import { HistoAppelComponent } from './pages/histo-appel/histo-appel.component';
import { HistoSmsComponent } from './pages/histo-sms/histo-sms.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HistoriqueAppelComponent,
    AppelTypeComponent,
    HistoAppelComponent,
    HistoSmsComponent,
    MenuComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
