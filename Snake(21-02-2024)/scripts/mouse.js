export default class Mouse{
    constructor(){
        let mouse;

        function createMouse(){
            function generateMouse(){
                let posX = Math.round(Math.random()*(10-3)+3);
                let posY = Math.round(Math.random()*(10-1)+1);
                return [posX, posY];
            }

            let mouseCoordinates = generateMouse();
            console.log(mouseCoordinates);
            mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
            
            while(mouse.classList.contains('snakeBody')){
                let mouseCoordinates = generateMouse();
                mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
            }
            
            mouse.classList.add('mouse');
        }
        createMouse();
    }
}