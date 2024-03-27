//будет класс по созданию поля
////////////////////////////////////////////////////

class DrawField{
    constructor(){
        this.field = document.createElement('div');
        document.body.appendChild(this.field);
        this.field.classList.add('field');

        for(let i = 1; i < 101; i++){
            let excel = document.createElement('div');
            this.field.appendChild(excel);
            excel.classList.add('excel');
        }

        this.excel = document.getElementsByClassName('excel');

        this.x = 1;
        this.y = 10;

        for(let i = 0; i < this.excel.length; i++){
            if(this.x>10){
                this.x=1;
                this.y--;
            }
            this.excel[i].setAttribute('posX', this.x);
            this.excel[i].setAttribute('posY', this.y);
            this.x++;
        }
    }
}
const drawField = new DrawField();
//////////////////////////////////////////////


//рисуем змейку
////////////////////////////////////////////////////////

class DrawSnake{
    constructor(){

        this.generateSnake = () => {
            //this.posX = Math.round(Math.random()*(10-3)+3);
            //this.posY = Math.round(Math.random()*(10-1)+1);
            this.posX = 2;
            this.posY = 6;
            return [this.posX, this.posY];
        }
        
        this.coordinates = this.generateSnake();
        this.snakeBody = [document.querySelector('[posX = "' + this.coordinates[0] + '"][posY = "' + this.coordinates[1] + '"]'),
                        document.querySelector('[posX = "' + (this.coordinates[0] - 1) + '"][posY = "' + this.coordinates[1] + '"]')
        ];
        
        for(let i = 0; i < this.snakeBody.length; i++){
            this.snakeBody[i].classList.add('snakeBody');
        }
        
        this.snakeBody[0].classList.add('head');
        
        // console.log(this.snakeBody);
    }
}
const drawSnake = new DrawSnake();
/////////////////////////////////////////////////////////

//рисуем мышь
////////////////////////////////////////////////////////

class DrawMouse{
    constructor(){
        this.mouse;

        this.createMouse = () => {
            const generateMouse = () => {
                let posX = Math.round(Math.random()*(10-3)+3);
                let posY = Math.round(Math.random()*(10-1)+1);
                return [posX, posY];
            }

            this.mouseCoordinates = generateMouse();
            console.log(this.mouseCoordinates);
            this.mouse = document.querySelector('[posX = "' + this.mouseCoordinates[0] + '"][posY = "' + this.mouseCoordinates[1] + '"]');
            
            while(this.mouse.classList.contains('snakeBody')){
                let mouseCoordinates = generateMouse();
                this.mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
            }
            
            this.mouse.classList.add('mouse');
        }

        this.createMouse();
    }
}
const drawMouse = new DrawMouse();
///////////////////////////////////////////////////

//окошко инпута
///////////////////////////////////////////////////
const input = document.createElement('input');
document.body.appendChild(input);
input.style.cssText = `
    margin: auto;
    margin-top: 40px;
    font-size: 20px;
    display: block;
    text-align: center
`;

let score = 0;
input.value = `Ваши очки: ${score}`;

//тут будет второй инпут для local storage

//движение змейки
////////////////////////////////////////////////////////////

class Move{
    constructor(){
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
                score++;
                input.value = `Ваши очки: ${score}`;
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

const moveSnake = new Move();
///////////////////////////////////////////////////////////


window.addEventListener('keydown', (e) => {
    if(moveSnake.steps == true){
        if ((e.keyCode === 37 || e.keyCode === 65) && moveSnake.direction !== "right") {
            moveSnake.direction = "left";
            moveSnake.steps = false;
            // console.log(true);
        } else if ((e.keyCode === 38 || e.keyCode === 87) && moveSnake.direction !== "down") {
            moveSnake.direction = "up";
            moveSnake.steps = false;
            // console.log(true);
        } else if ((e.keyCode === 39 || e.keyCode === 68) && moveSnake.direction !== "left") {
            moveSnake.direction = "right";
            moveSnake.steps = false;
            // console.log(true);
        } else if ((e.keyCode === 40 || e.keyCode === 83) && moveSnake.direction !== "up") {
            moveSnake.direction = "down";
            moveSnake.steps = false;
            // console.log(true);
        }
    } 
});