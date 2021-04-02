import { HistoSmsComponent } from './pages/histo-sms/histo-sms.component';
import { HistoAppelComponent } from './pages/histo-appel/histo-appel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'historique', component: HistoAppelComponent},
  { path: 'messages', component: HistoSmsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
