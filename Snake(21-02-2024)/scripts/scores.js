export default class Scores{
    constructor(){
        let input = document.createElement('input');
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
    }
}