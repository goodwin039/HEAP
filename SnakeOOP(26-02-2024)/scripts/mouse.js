export default class Mouse{
    constructor(){
        this.mouse;

        function createMouse(){
            function generateMouse(){
                this.posX = Math.round(Math.random()*(10-3)+3);
                this.posY = Math.round(Math.random()*(10-1)+1);
                return [this.posX, this.posY];
            }

            this.mouseCoordinates = generateMouse();
            console.log(this.mouseCoordinates);
            this.mouse = document.querySelector('[posX = "' + this.mouseCoordinates[0] + '"][posY = "' + this.mouseCoordinates[1] + '"]');
            
            while(this.mouse.classList.contains('snakeBody')){
                this.mouseCoordinates = generateMouse();
                this.mouse = document.querySelector('[posX = "' + this.mouseCoordinates[0] + '"][posY = "' + this.mouseCoordinates[1] + '"]');
            }
            
            this.mouse.classList.add('mouse');
        }
        createMouse();
    }
}