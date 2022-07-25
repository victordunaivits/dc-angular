import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonagensService } from 'src/app/api/personagens.service';
import { IPersonagem } from 'src/app/Personagem';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css'],
})
export class PersonagemComponent implements OnInit {
  dadosPersonagem?: IPersonagem = {};
  existePersonagem?: boolean;
  postEnviado: boolean = false;
  id: string = String(this.route.snapshot.paramMap.get('id'));

  constructor(
    private personagemService: PersonagensService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPersonagem();
  }

  getPersonagem(): void {
    this.personagemService.getID(this.id).subscribe((personagem) => {
      (this.dadosPersonagem = personagem), (this.existePersonagem = true);
    });
  }

  editPersonagem() {
    this.router.navigate(['cadastroPersonagem/', this.id])
  }

  deletePersonagem(): void {
    this.personagemService.delete(this.id).subscribe(() => {
      this.postEnviado = true;
    });

    setTimeout(() => {
      this.router.navigate(['/personagem'])
    }, 1000)
  }
}
