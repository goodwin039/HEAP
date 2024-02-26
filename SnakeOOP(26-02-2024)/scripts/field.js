export default class Field{
    constructor(){
        this.field = document.createElement('div');
        document.body.appendChild(field);
        this.field.classList.add('field');

        for(let i = 1; i < 101; i++){
            this.excel = document.createElement('div');
            this.field.appendChild(excel);
            this.excel.classList.add('excel');
        }

        this.excel = document.getElementsByClassName('excel');
        // excel[0].setAttribute('posX','test');
        // excel[0].setAttribute('posY','test');

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