import { Component, OnInit } from '@angular/core';
import { GameoflifeService } from './gameoflife.service';
import { GameBoard } from './GameBoard';
import { HTTP_PROVIDERS } from '@angular/http';
import { GameboardComponent } from './gameboard/gameboard.component'


@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [HTTP_PROVIDERS, GameoflifeService]
})
export class AppComponent implements OnInit {
    title = 'app works!';
    boards: GameBoard[];
    board: GameBoard;
    constructor(private gameOfLifeService: GameoflifeService) {

    }

    ngOnInit() {
        this.getBoards();
    }

    getBoards(){
      this.gameOfLifeService.getScenarios()
          .subscribe(boards => {
              this.boards = boards;
          }),
          error => console.log(error);
    }

    addNew(){
      this.board = new GameBoard();
      this.board.id = ":new";
    }

    configNewBoard(){
      this.gameOfLifeService.configNewBoard(this.board.size, this.board.initialAliveCells)
                            .subscribe(board => {
                              this.board = board;
                              this.getBoards();
                            }),
                            error => console.log(error);
    }

    loadBoard(id:String){
      this.gameOfLifeService.loadBoard(id)
                            .subscribe(board => {
                              this.board = board;
                            }),
                            error => console.log(error);
    }

    calcNextGen(id: String){
      this.gameOfLifeService.calcNextGen(id)
                            .subscribe(board => {
                              this.board = board;
                            }),
                            error => console.log(error);
    }

    deleteBoard(id:String){
      this.gameOfLifeService.deleteBoard(id)
                            .subscribe(board => {
                              alert("deleted...");
                              this.board = null;
                              this.getBoards();
                            }),
                            error => console.log(error);
    }
}
