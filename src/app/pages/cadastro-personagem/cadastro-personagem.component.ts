import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonagensService } from './../../api/personagens.service';
import { IPostPersonagem, IPersonagem } from './../../Personagem';

@Component({
  selector: 'app-cadastro-personagem',
  templateUrl: './cadastro-personagem.component.html',
  styleUrls: ['./cadastro-personagem.component.css'],
})
export class CadastroPersonagemComponent implements OnInit {
  nomeHeroi!: string | undefined;
  poder!: string | undefined;
  descricao!: string | undefined;
  idade!: number | undefined;
  imagem!: string | undefined;
  postEnviado: boolean = false;
  existePersonagem!: boolean;
  objetoPost: IPostPersonagem = {} as IPostPersonagem;
  formulario!: FormGroup;
  id: string = String(this.route.snapshot.paramMap.get('id'));

  get nome() {
    return this.formulario.get('nome')!;
  }

  get poderHeroi() {
    return this.formulario.get('poder')!;
  }

  get descricaoHeroi() {
    return this.formulario.get('descricao')!;
  }

  get idadeHeroi() {
    return this.formulario.get('idade')!;
  }

  get imagemHeroi() {
    return this.formulario.get('imagem')!;
  }

  constructor(
    private personagemService: PersonagensService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.id) this.getDadosPersonagem();

    this.formulario = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      poder: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      imagem: new FormControl('', [Validators.required]),
      idade: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
      ]),
    });
  }

  popularObjeto() {
    this.objetoPost.nomeHeroi = this.nomeHeroi;
    this.objetoPost.poder = this.poder;
    this.objetoPost.descricao = this.descricao;
    this.objetoPost.idade = this.idade;
    this.objetoPost.urlImagem = this.imagem;

    return this.objetoPost;
  }

  putOuPost() {
    const id: string | null = this.route.snapshot.paramMap.get('id');

    if (this.formulario.invalid) return;

    this.popularObjeto();
    id ? this.put(id) : this.post();

    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      this.router.navigate(['/personagem']);
    }, 1000);
  }

  getDadosPersonagem(): void {
    this.personagemService.getID(this.id).subscribe((personagem) => {
      (this.nomeHeroi = personagem.nomeHeroi),
        (this.poder = personagem.poder),
        (this.descricao = personagem.descricao),
        (this.idade = personagem.idade),
        (this.imagem = personagem.urlImagem),
        (this.existePersonagem = true);
    });
  }

  put(id: string): void {
    this.personagemService.put(id, this.objetoPost).subscribe(() => {
      this.postEnviado = true;
    });
  }

  post(): void {
    this.personagemService.post(this.objetoPost).subscribe(() => {
      this.postEnviado = true;
    });
  }
}
