export default class Score {
    constructor( scoreBlock, score = 0 ) {

        this.scoreBlock = document.querySelector( scoreBlock );
        this.score = score;

        this.draw();

    }

    incScore() {
        this.score++;
        this.draw();
    }

    setToZero() {
        this.score = 0;
        this.draw();
    }

    draw() {
        this.scoreBlock.innerHTML = this.score;
        const currentScoreBest = localStorage.getItem('score');
        if(this.score > currentScoreBest){
            localStorage.setItem('score',this.score);
        }
    }

    drawBest(){
        const currentScoreBest = localStorage.getItem('score');
        // currentScoreBest = localStorage.removeItem('score');
        document.querySelector("#best-res").innerHTML = currentScoreBest;
    }
    
}