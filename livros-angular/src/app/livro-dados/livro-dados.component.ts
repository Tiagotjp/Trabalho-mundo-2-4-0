import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { Router } from '@angular/router';
import { Editora } from '../editora'; 

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(1, 1, 'Título do Livro', 'Resumo do Livro', ['Autor 1', 'Autor 2']);
  autoresForm: string = '';
  editoras: Editora[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir() {
    this.livro.autores = this.autoresForm.split('\n');

    this.servLivros.incluir(this.livro);

    this.router.navigateByUrl('/lista');
  }
}

