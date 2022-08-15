import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonagensService } from 'src/app/api/personagens.service';
import { IPersonagem } from 'src/app/Personagem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  personagens: Array<IPersonagem> = [];

  constructor(
    private personagemService: PersonagensService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPersonagemId();
    document.title = 'Projeto DC';
  }

  personagensId(id: any) {
    const pegarId: string = id;
    this.router.navigate(['personagem/', pegarId]);
  }

  getPersonagemId(): void {
    this.personagemService
      .getAll()
      .subscribe((personagem) => (this.personagens = personagem));
  }
}
