import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase [] = FRASES
  public instrucao : string = 'Traduza a Frase: '

  public valorTextArea : string = ''

  public rodada: number = 0
  public rodadaFrase!: Frase

  public progresso : number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo = new EventEmitter()
  
  constructor() {
    this.atualizaRodada()
    
    
   }
 
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    console.log('componente painel foi destruido');
    
  }


  atualizarResposta(resposta: Event){
    this.valorTextArea = (<HTMLInputElement>resposta.target).value
    // console.log(this.valorTextArea);
    
  }

  public verificarResposta(){
    
    if(this.rodadaFrase.frasePtBr == this.valorTextArea){
    // if(this.rodadaFrase.frasePtBr.trim().toUpperCase == this.valorTextArea.trim().toUpperCase){
      // alert('A tradução está correta')
      this.rodada++
      this.atualizaRodada()
      this.progresso = this.progresso + (100/this.frases.length)

      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria')
        // alert('Concluido as traduções com sucesso')
      }

    } else {
      // alert('A tradução está errada')
      this.tentativas--
      this.atualizaRodada()
      if(this.tentativas <= -1){
        this.encerrarJogo.emit('derrota')

        // alert('Você perdeu todas as tentativas!!')
      }
      console.log(this.tentativas);
      
    }

    
    // console.log('verificar resposta', this.valorTextArea)
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.valorTextArea = ""


  }

}
