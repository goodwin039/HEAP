export default class DrawMouse{
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
// const drawMouse = new DrawMouse();