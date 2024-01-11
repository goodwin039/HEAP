const onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    const renderGame = () => {
        ctx.clearRect(0,0,width,height);

        for (let y = 0; y < row; y++) {
            for (let x = 0; x < row; x++) {
                ctx.fillStyle = "aqua";
                ctx.fillRect(x*ceil,y*ceil,ceilFill,ceilFill);
                state.snake.tail.forEach(s => {
                    if (s.x === x && s.y === y) {
                        ctx.fillStyle = colors.snakeBody;
                        ctx.fillRect(x*ceil,y*ceil,ceilFill,ceilFill);
                        if (s.head) {
                            ctx.fillStyle = colors.snakeHead;
                            ctx.fillRect(x*ceil,y*ceil,ceilFill,ceilFill);
                        }
                    }
                });
            }
        }
    };
    renderGame();

    // const onKeyDown = (e) => {console.log(e)}
    // document.addEventListener("keydown",onKeyDown);
    const onKeyDown = (e) => {
        changeDirection(e.keyCode);
        moveSnake();
        renderGame();
        console.log(state.snake);
    }
    document.addEventListener("keydown",onKeyDown);
};

window.addEventListener("load",onload);