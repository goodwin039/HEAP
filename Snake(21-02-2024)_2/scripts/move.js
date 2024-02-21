import Field from "./field.js";
import Mouse from "./mouse.js";
import Scores from "./scores.js";
import Snake from "./snake.js";




export default class Move{
    constructor(){
        let field = new Field();
        let snake = new Snake();
        let mouse = new Mouse();
        let scores = new Scores();

        let direction = 'right';
        let steps = false;

        function move(){
            let snakeCoordinates = [snake.snakeBody[0].getAttribute('posX'), snake.snakeBody[0].getAttribute('posY')];
            snake.snakeBody[0].classList.remove('head');
            snake.snakeBody[snake.snakeBody.length-1].classList.remove('snakeBody');
            snake.snakeBody.pop();

            if(direction == 'right'){
                if(snakeCoordinates[0]<10){
                    snake.snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0]+1)+ '"][posY = "'+ snakeCoordinates[1] + '"]' ));
                }else{
                    snake.snakeBody.unshift(document.querySelector('[posX = "1"][posY = "'+ snakeCoordinates[1] + '"]' ));
                }
            }else if(direction == 'left'){
                if(snakeCoordinates[0]>1){
                    snake.snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0]-1)+ '"][posY = "'+ snakeCoordinates[1] + '"]' ));
                }else{
                    snake.snakeBody.unshift(document.querySelector('[posX = "10"][posY = "'+ snakeCoordinates[1] + '"]' ));
                } 
            }else if(direction == 'up'){
                if(snakeCoordinates[1]<10){
                    snake.snakeBody.unshift(document.querySelector('[posX = "' +snakeCoordinates[0]+ '"][posY = "'+ (+snakeCoordinates[1]+1) + '"]' ));
                }else{
                    snake.snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] + '"][posY = "1"]'));
                }
            }else if(direction == 'down'){
                if(snakeCoordinates[1]>1){
                    snake.snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "'+ (snakeCoordinates[1]-1) + '"]' ));
                }else{
                    snake.snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] + '"][posY = "10"]' ));
                }
            }

            if(snake.snakeBody[0].getAttribute('posX') == mouse.mouse.getAttribute('posX') && snake.snakeBody[0].getAttribute('posY') == mouse.mouse.getAttribute('posY')){
                mouse.mouse.classList.remove('mouse');
                let a = snake.snakeBody[snakeBody.length-1].getAttribute('posX');
                let b = snake.snakeBody[snakeBody.length-1].getAttribute('posY');
                snake.snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
                mouse.createMouse();
                scores.score++;
                scores.input.value = `Ваши очки: ${score}`;
                // console.log(true);
            }

            if(snake.snakeBody[0].classList.contains('snakeBody')){
                setTimeout(() => {
                    alert('GameOver');
                }, 200);        
                clearInterval(interval);
                snake.snakeBody[0].style.background = 'black';
            }

            snake.snakeBody[0].classList.add('head');
            for(let i=0; i<snake.snakeBody.length; i++){
                snake.snakeBody[i].classList.add('snakeBody');
            }

            steps = true;
        }

        let interval = setInterval(move, 300);

        window.addEventListener('keydown', (e) => {
            if(steps == true){
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