export default class Scores{
    constructor(){
        this.input = document.createElement('input');
        document.body.appendChild(input);
        this.input.style.cssText = `
            margin: auto;
            margin-top: 40px;
            font-size: 20px;
            display: block;
            text-align: center
        `;

        this.score = 0;
        this.input.value = `Ваши очки: ${score}`;
    }
}