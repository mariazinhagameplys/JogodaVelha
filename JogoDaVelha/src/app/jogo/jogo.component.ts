import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  
  character: string;
  posicao: number;
  imagem: string;
  
  verifyCharacter(){
    if (this.character === "o" || "O"){
      this.imagem="https://upload.wikimedia.org/wikipedia/commons/2/2d/O-Jolle_insigna.png"
    }else{
      this.imagem="https://imagensemoldes.com.br/wp-content/uploads/2021/02/Imagem-Letra-X-PNG.png"
    }
  }
  
  showIcon(){
    document.getElementById('imagem').style.display = "block";
  }
  
  constructor() { }

  ngOnInit() {
  }

}
