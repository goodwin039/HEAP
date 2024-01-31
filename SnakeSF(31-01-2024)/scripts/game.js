import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Snake from "./snake.js";
import Score from "./score.js";
import Berry from "./berry.js";

export default class Game {

    constructor( container ) {

        this.canvas = new Canvas( container );
        const field = document.querySelector('.canvas-wrapper');
        field.addEventListener('click', () => {
            this.snake = new Snake();
            this.berry = new Berry( this.canvas );
            this.score = new Score( ".game-score .score-count", 0 );
            this.score.drawBest();
            new GameLoop( this.update.bind(this), this.draw.bind(this) );
          });        
    }

    update() {
        this.snake.update( this.berry, this.score, this.canvas );
    }

    draw() {

        this.canvas.context.clearRect( 0, 0, this.canvas.element.width, this.canvas.element.height );
        this.snake.draw( this.canvas.context );
        this.berry.draw( this.canvas.context );

    }

}

new Game( document.querySelector(".canvas-wrapper") );