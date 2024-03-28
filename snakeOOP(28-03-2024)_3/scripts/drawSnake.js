export default class DrawSnake{
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
// const drawSnake = new DrawSnake();