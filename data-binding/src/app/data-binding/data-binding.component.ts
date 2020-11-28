import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorIncial = 15;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'teste',
    idade: 27
  }

  url: string = 'teste.com';

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  getValor() {
    return 10;
  }

  botaoClicado(){
    alert("Clicou");
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
