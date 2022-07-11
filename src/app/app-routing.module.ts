import { CadastroPersonagemComponent } from './pages/cadastro-personagem/cadastro-personagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonagemComponent } from './pages/personagem/personagem.component'


const routes: Routes = [
  { path: 'personagem', component:  HomeComponent},
  { path: 'personagem/:id', component: PersonagemComponent},
  { path: 'cadastroPersonagem', component: CadastroPersonagemComponent },
  { path: 'cadastroPersonagem/:id', component: CadastroPersonagemComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

