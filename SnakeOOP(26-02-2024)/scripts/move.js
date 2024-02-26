import Field from "./field.js";
import Mouse from "./mouse.js";
import Scores from "./scores.js";
import Snake from "./snake.js";




export default class Move{
    constructor(){
        this.field = new Field();
        this.snake = new Snake();
        this.mouse = new Mouse();
        this.scores = new Scores();

        this.direction = 'right';
        this.steps = false;
        this.interval = setInterval(this.move.bind(this), 300);

        function move(){
            this.snakeCoordinates = [this.snake.snakeBody[0].getAttribute('posX'), this.snake.snakeBody[0].getAttribute('posY')];
            this.snake.snakeBody[0].classList.remove('head');
            this.snake.snakeBody[this.snake.snakeBody.length-1].classList.remove('snakeBody');
            this.snake.snakeBody.pop();

            if(this.direction == 'right'){
                if(this.snakeCoordinates[0]<10){
                    this.snake.snakeBody.unshift(document.querySelector('[posX = "' + (+this.snakeCoordinates[0]+1)+ '"][posY = "'+ this.snakeCoordinates[1] + '"]' ));
                }else{
                    this.snake.snakeBody.unshift(document.querySelector('[posX = "1"][posY = "'+ this.snakeCoordinates[1] + '"]' ));
                }
            }else if(this.direction == 'left'){
                if(this.snakeCoordinates[0]>1){
                    this.snake.snakeBody.unshift(document.querySelector('[posX = "' + (+this.snakeCoordinates[0]-1)+ '"][posY = "'+ this.snakeCoordinates[1] + '"]' ));
                }else{
                    this.snake.snakeBody.unshift(document.querySelector('[posX = "10"][posY = "'+ this.snakeCoordinates[1] + '"]' ));
                } 
            }else if(this.direction == 'up'){
                if(this.snakeCoordinates[1]<10){
                    this.snake.snakeBody.unshift(document.querySelector('[posX = "' +this.snakeCoordinates[0]+ '"][posY = "'+ (+this.snakeCoordinates[1]+1) + '"]' ));
                }else{
                    this.snake.snakeBody.unshift(document.querySelector('[posX = "'+ this.snakeCoordinates[0] + '"][posY = "1"]'));
                }
            }else if(this.direction == 'down'){
                if(this.snakeCoordinates[1]>1){
                    this.snake.snakeBody.unshift(document.querySelector('[posX = "' + this.snakeCoordinates[0] + '"][posY = "'+ (this.snakeCoordinates[1]-1) + '"]' ));
                }else{
                    this.snake.snakeBody.unshift(document.querySelector('[posX = "'+ this.snakeCoordinates[0] + '"][posY = "10"]' ));
                }
            }

            if(this.snake.snakeBody[0].getAttribute('posX') == mouse.mouse.getAttribute('posX') && snake.snakeBody[0].getAttribute('posY') == mouse.mouse.getAttribute('posY')){
                this.mouse.mouse.classList.remove('mouse');
                this.a = this.snake.snakeBody[snakeBody.length-1].getAttribute('posX');
                this.b = this.snake.snakeBody[snakeBody.length-1].getAttribute('posY');
                this.snake.snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
                this.mouse.createMouse();
                this.scores.score++;
                this.scores.input.value = `Ваши очки: ${score}`;
                // console.log(true);
            }

            if(this.snake.snakeBody[0].classList.contains('snakeBody')){
                setTimeout(() => {
                    alert('GameOver');
                }, 200);        
                clearInterval(interval);
                this.snake.snakeBody[0].style.background = 'black';
            }

            this.snake.snakeBody[0].classList.add('head');
            for(let i=0; i<this.snake.snakeBody.length; i++){
                this.snake.snakeBody[i].classList.add('snakeBody');
            }

            this.steps = true;
        }

        //this.interval = setInterval(move, 300);

        window.addEventListener('keydown', (e) => {
            if(this.steps == true){
                if ((e.keyCode === 37 || e.keyCode === 65) && direction !== "right") {
                    direction = "left";
                    steps = false;
                    // console.log(true);
                } else if ((e.keyCode === 38 || e.keyCode === 87) && direction !== "down") {
                    direction = "up";
                    steps = false;
                    // console.log(true);
                } else if ((e.keyCode === 39 || e.keyCode === 68) && direction !== "left") {
                    direction = "right";
                    steps = false;
                    // console.log(true);
                } else if ((e.keyCode === 40 || e.keyCode === 83) && direction !== "up") {
                    direction = "down";
                    steps = false;
                    // console.log(true);
                }
            } 
        });


    }
}