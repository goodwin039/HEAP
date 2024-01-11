const changeDirection = (keyCode) => {
    const direction = mapKeyCode(keyCode);
    state.snake.direction = direction;
};

const moveSnake = () => {
    const headSnake = state.snake.tail[state.snake.tail.length-1];
    const direction = state.snake.direction;
    let newMovementSnake;

    if (direction === "left") {
        newMovementSnake = {x:headSnake.x-1,y:headSnake.y,dir:direction,head:true};
    }
    if (direction === "right") {
        newMovementSnake = {x:headSnake.x+1,y:headSnake.y,dir:direction,head:true};
    }
    if (direction === "up") {
        newMovementSnake = {x:headSnake.x,y:headSnake.y-1,dir:direction,head:true};
    }
    if (direction === "down") {
        newMovementSnake = {x:headSnake.x,y:headSnake.y+1,dir:direction,head:true};
    }

    state.snake.tail.shift();
    headSnake.head = false;
    state.snake.tail.push(newMovementSnake);
};

const _setTeleportSnake = (snake, newHeadSnake) => {
    const {direction} = snake;
    const rowEdge = row - 1;

    if (newHeadSnake.x > rowEdge && direction === "right") {
        return {x:0,y:newHeadSnake.y,dir:newHeadSnake.dir,head:newHeadSnake.head};
    }
    if (newHeadSnake.x < 0 && direction === "left") {
        return{x:rowEdge,y:newHeadSnake.y,dir:newHeadSnake.dir,head:newHeadSnake.head};        
    }
};