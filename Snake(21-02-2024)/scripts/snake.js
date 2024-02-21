export default class Snake{
    constructor(){
        function generateSnake(){
    
            let posX = 2;
            let posY = 6;
            return [posX, posY];
        }
        
        let coordinates = generateSnake();
        let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'),
                        document.querySelector('[posX = "' + (coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]')
        ];
        
        for(let i = 0; i < snakeBody.length; i++){
            snakeBody[i].classList.add('snakeBody');
        }
        
        snakeBody[0].classList.add('head');


    }
}