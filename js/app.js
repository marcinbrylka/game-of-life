document.addEventListener("DOMContentLoaded", function () {

    function GameOfLife(boardWidth, boardHeight) {
        this.width = boardWidth;
        this.height = boardHeight;
        this.board = document.getElementById("board");
        this.cell = this.board.querySelector("div");
        this.cells = [];

        this.createBoard = function () {
            this.board.style.width = this.width * 10 + 'px';
            this.board.style.height = this.height * 10 + 'px';

            var numberOfCells = this.width * this.height;
            for (var i = 0; i < numberOfCells; i++) {
                var newCell = document.createElement('div');
                this.board.appendChild(newCell);
                this.cells.push(newCell);
            }
        }
    }

    var game = new GameOfLife(110, 56);
    game.createBoard();
    console.log(game.cells);

});