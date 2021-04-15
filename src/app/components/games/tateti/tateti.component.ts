import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.scss']
})
export class TatetiComponent implements OnInit {

  PLAYER_COMPUTER = { name: 'Enemigo', symbol: 'O' };
  PLAYER_HUMAN = { name: 'Jugador', symbol: 'X' };
  DRAW = { name: 'Empate' };

  scoreHuman = 0;
  scoreComputer = 0;

  board: any[] = [];
  currentPlayer = this.PLAYER_HUMAN;
  lastWinner: any;
  gameOver: boolean = false;
  boardLocked: boolean = false;
  usuarioLogueado: any;

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
    this.newGame();

  }

  square_click(square: any) {
    if (square.value === '' && !this.gameOver) {
      square.value = this.PLAYER_HUMAN.symbol;
      this.completeMove(this.PLAYER_HUMAN);
    }
  }

  computerMove(firstMove: boolean = false) {
    this.boardLocked = true;

    setTimeout(() => {
      let square = firstMove ? this.board[4] : this.getRandomAvailableSquare();
      square.value = this.PLAYER_COMPUTER.symbol;
      this.completeMove(this.PLAYER_COMPUTER);
      this.boardLocked = false;
    }, 1000);
  }

  completeMove(player: any) {

    if (this.isWinner(player.symbol))
      this.showGameOver(player);
    else if (!this.availableSquaresExist())
      this.showGameOver(this.DRAW);
    else {
      this.currentPlayer = (this.currentPlayer == this.PLAYER_COMPUTER ? this.PLAYER_HUMAN : this.PLAYER_COMPUTER);

      if (this.currentPlayer == this.PLAYER_COMPUTER)
        this.computerMove();
    }
  }

  availableSquaresExist(): boolean {
    return this.board.filter(s => s.value == '').length > 0;

  }

  getRandomAvailableSquare(): any {
    let availableSquares = this.board.filter(s => s.value === '');
    var squareIndex = this.getRndInteger(0, availableSquares.length - 1);

    return availableSquares[squareIndex];
  }

  showGameOver(winner: any) {
    this.gameOver = true;
    this.lastWinner = winner;

    if (winner !== this.DRAW)
      this.currentPlayer = winner;

    this.addScore(winner);
  }

  get winningIndexes(): any[] {
    return [
      [0, 1, 2],  //top row
      [3, 4, 5],  //middle row
      [6, 7, 8],  //bottom row
      [0, 3, 6],  //first col
      [1, 4, 7],  //second col
      [2, 5, 8],  //third col
      [0, 4, 8],  //first diagonal
      [2, 4, 6]   //second diagonal
    ];
  }

  isWinner(symbol: any): boolean {
    for (let pattern of this.winningIndexes) {
      const foundWinner = this.board[pattern[0]].value == symbol
        && this.board[pattern[1]].value == symbol
        && this.board[pattern[2]].value == symbol;

      if (foundWinner) {
        for (let index of pattern) {
          this.board[index].winner = true;
        }
        return true;
      }
    }
    return false;
  }

  newGame() {
    this.board = [
      { value: '' }, { value: '' }, { value: '' },
      { value: '' }, { value: '' }, { value: '' },
      { value: '' }, { value: '' }, { value: '' }
    ];

    this.gameOver = false;
    this.boardLocked = false;

    if (this.currentPlayer == this.PLAYER_COMPUTER) {
      this.boardLocked = true;
      this.computerMove(true);
    }
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addScore(winner: any) {
    if (winner === this.PLAYER_COMPUTER) {
      this.scoreComputer++;
      this.CargarPuntaje(0);
    }
    if (winner === this.PLAYER_HUMAN) {
      this.scoreHuman++;
      this.CargarPuntaje(1);
    }
  }

  CargarPuntaje(resultado: number) {
    if (resultado)
      console.log('Gano')
    else
      console.log('perdio')
  }


  goBack() {
    this.router.navigate(['home/games'])
  }


}
