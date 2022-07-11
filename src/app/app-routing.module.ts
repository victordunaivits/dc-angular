import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPersonagemComponent } from './pages/cadastro-personagem/cadastro-personagem.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonagemComponent } from './pages/personagem/personagem.component';

const routes: Routes = [
  { path: '', redirectTo: '/personagem', pathMatch: 'full' },
  { path: 'personagem', component: HomeComponent },
  { path: 'personagem/:id', component: PersonagemComponent },
  { path: 'cadastroPersonagem', component: CadastroPersonagemComponent },
  { path: 'cadastroPersonagem/:id', component: CadastroPersonagemComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
