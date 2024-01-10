import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicarVagasComponent } from './views/publicar-vagas/publicar-vagas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MinhasCandidaturasComponent } from './views/minhas-candidaturas/minhas-candidaturas.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "login", component: LoginComponent},
  { path: "publicar-vagas", component: PublicarVagasComponent},
  { path: "home", component: HomeComponent},
  { path: 'publicar-vagas/:id', component: PublicarVagasComponent },
  { path: 'minhas-candidaturas', component: MinhasCandidaturasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
