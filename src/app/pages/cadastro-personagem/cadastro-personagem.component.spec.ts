import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPersonagemComponent } from './cadastro-personagem.component';

describe('CadastroPersonagemComponent', () => {
  let component: CadastroPersonagemComponent;
  let fixture: ComponentFixture<CadastroPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPersonagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
