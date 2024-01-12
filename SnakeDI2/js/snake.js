const changeDirection = (keyCode) => {
    const direction = mapKeyCode(keyCode);
    if (_hasDirection(state.snake,direction)) {
        state.snake.direction = direction;
    }    
};

const moveSnake = () => {
    const headSnake = _getHeadSnake(state.snake);
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

    newMovementSnake = _setTeleportSnake(state.snake, newMovementSnake);

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
    if(newHeadSnake.y < 0 && direction === "up"){
        return {x:newHeadSnake.x,y:rowEdge,dir:newHeadSnake.dir,head:newHeadSnake.head};
    }
    if(newHeadSnake.y > rowEdge && direction === "down"){
        return{x:newHeadSnake.x,y:0,dir:newHeadSnake.dir,head:newHeadSnake.head};
    }

    return{x:newHeadSnake.x,y:newHeadSnake.y,dir:newHeadSnake.dir,head:newHeadSnake.head};
};

const _hasDirection = (snake, direction) => {
    const headSnake = _getHeadSnake(snake);

    if (
        (direction === "left" && headSnake.dir !== "right") ||
        (direction === "right" && headSnake.dir !== "left") ||
        (direction === "up" && headSnake.dir !== "down") ||
        (direction === "down" && headSnake.dir !== "up")
    ) {
        return true;    
    }

    return false;
};

const _getHeadSnake = (snake) => {
    return snake.tail[snake.tail.length - 1];
};