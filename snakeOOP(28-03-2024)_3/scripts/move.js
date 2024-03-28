import DrawField from "./drawField";
import DrawMouse from "./drawMouse";
import DrawSnake from "./drawSnake";
import InputScores from "./inputScores";


const drawMouse = new DrawMouse();
const drawSnake = new DrawSnake();
const inputScores = new InputScores();

export default class Move{
    constructor(){
        this.drawField = new DrawField();
        this.direction = 'right';
        this.steps = false;

        this.move = () => {
            this.snakeCoordinates = [drawSnake.snakeBody[0].getAttribute('posX'), drawSnake.snakeBody[0].getAttribute('posY')];
            drawSnake.snakeBody[0].classList.remove('head');
            drawSnake.snakeBody[drawSnake.snakeBody.length-1].classList.remove('snakeBody');
            drawSnake.snakeBody.pop();

            if(this.direction == 'right'){
                if(this.snakeCoordinates[0]<10){
                    drawSnake.snakeBody.unshift(document.querySelector('[posX = "' + (+this.snakeCoordinates[0]+1)+ '"][posY = "'+ this.snakeCoordinates[1] + '"]' ));
                }else{
                    drawSnake.snakeBody.unshift(document.querySelector('[posX = "1"][posY = "'+ this.snakeCoordinates[1] + '"]' ));
                }
            }else if(this.direction == 'left'){
                if(this.snakeCoordinates[0]>1){
                    drawSnake.snakeBody.unshift(document.querySelector('[posX = "' + (+this.snakeCoordinates[0]-1)+ '"][posY = "'+ this.snakeCoordinates[1] + '"]' ));
                }else{
                    drawSnake.snakeBody.unshift(document.querySelector('[posX = "10"][posY = "'+ this.snakeCoordinates[1] + '"]' ));
                } 
            }else if(this.direction == 'up'){
                if(this.snakeCoordinates[1]<10){
                    drawSnake.snakeBody.unshift(document.querySelector('[posX = "' +this.snakeCoordinates[0]+ '"][posY = "'+ (+this.snakeCoordinates[1]+1) + '"]' ));
                }else{
                    drawSnake.snakeBody.unshift(document.querySelector('[posX = "'+ this.snakeCoordinates[0] + '"][posY = "1"]'));
                }
            }else if(this.direction == 'down'){
                if(this.snakeCoordinates[1]>1){
                    drawSnake.snakeBody.unshift(document.querySelector('[posX = "' + this.snakeCoordinates[0] + '"][posY = "'+ (this.snakeCoordinates[1]-1) + '"]' ));
                }else{
                    drawSnake.snakeBody.unshift(document.querySelector('[posX = "'+ this.snakeCoordinates[0] + '"][posY = "10"]' ));
                }
            }

            if(drawSnake.snakeBody[0].getAttribute('posX') == drawMouse.mouse.getAttribute('posX') && drawSnake.snakeBody[0].getAttribute('posY') == drawMouse.mouse.getAttribute('posY')){
                drawMouse.mouse.classList.remove('mouse');
                let a = drawSnake.snakeBody[drawSnake.snakeBody.length-1].getAttribute('posX');
                let b = drawSnake.snakeBody[drawSnake.snakeBody.length-1].getAttribute('posY');
                drawSnake.snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
                drawMouse.createMouse();
                inputScores.score++;
                inputScores.input.value = `Ваши очки: ${inputScores.score}`;
                // console.log(true);
            }

            if(drawSnake.snakeBody[0].classList.contains('snakeBody')){
                setTimeout(() => {
                    alert('GameOver');
                }, 200);        
                clearInterval(this.interval);
                drawSnake.snakeBody[0].style.background = 'black';
            }

            drawSnake.snakeBody[0].classList.add('head');
            for(let i=0; i<drawSnake.snakeBody.length; i++){
                drawSnake.snakeBody[i].classList.add('snakeBody');
            }

            this.steps = true;
        }

        this.interval = setInterval(this.move, 300);
    }
}

// const moveSnake = new Move();