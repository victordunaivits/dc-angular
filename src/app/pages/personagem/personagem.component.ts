import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    private personagemService: PersonagensService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPersonagem();
  }

  getPersonagem(): void {
    const id: string = String(this.route.snapshot.paramMap.get('id'));

    this.personagemService.getID(id).subscribe((personagem) => {
      (this.dadosPersonagem = personagem), (this.existePersonagem = true);
    });
  }

  editPersonagem() {
    const id: string = String(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['cadastroPersonagem/', id])
  }

  deletePersonagem(): void {
    const id: string = String(this.route.snapshot.paramMap.get('id'));

    this.personagemService.delete(id).subscribe(() => {
      this.postEnviado = true;
    });

    setTimeout(() => {
      this.router.navigate(['/personagem'])
    }, 1000)
  }
}
