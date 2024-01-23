const changeDirection = (keyCode) => {// параметр keyCode получаем из события нажатия клавиши
    const direction = mapKeyCode(keyCode);

    if(_hasDirection(state.snake, direction)){//проверяем менять или не менять направление, если да то изменяем state если нет то ни чего не меняем
        state.snake.direction = direction;//обращаемся к состоянию и меняем состояние
    }    
};

const moveSnake = () => {
    const headSnake = _getHeadSnake(state.snake);
    const direction = state.snake.direction;
    let newMovementSnake;

    if(direction === "left"){
        newMovementSnake = {x: headSnake.x - 1, y: headSnake.y, d: direction, h: true};
    }
    if(direction === "right"){
        newMovementSnake = {x: headSnake.x + 1, y: headSnake.y, d: direction, h: true};
    }
    if(direction === "up"){
        newMovementSnake = {x: headSnake.x, y: headSnake.y - 1, d: direction, h: true};
    }
    if(direction === "down"){
        newMovementSnake = {x: headSnake.x, y: headSnake.y + 1, d: direction, h: true};
    }

    newMovementSnake = _setTeleportSnake(state.snake, newMovementSnake);

    state.snake.lastPosTail = state.snake.tail.shift();//удаляем первый элемент массива
    headSnake.h = false;// чтобы цвет тела змейки был отличным от цвета головы
    state.snake.tail.push(newMovementSnake); //добавляем  новый
    _checkGrowth();
};

const _setTeleportSnake = (snake, newHeadSnake) => {//для телепортации змейки при выходе за края экрана
    const {direction} = snake;//деструктурируем свойство дирекшн из объекта снейк из файла snake.js
    const rowEdge = row - 1;//узнаём края поля

    //если голова змейки больше чем край поля и направлени right то возвращаем новое значение для координат x
    if(newHeadSnake.x > rowEdge && direction === "right"){
        return{x: 0, y: newHeadSnake.y, d: newHeadSnake.d, h: newHeadSnake.h};//переносим змейку в началу поля
    }
    if(newHeadSnake.x < 0 && direction === "left"){
        return{x: rowEdge, y: newHeadSnake.y, d: newHeadSnake.d, h: newHeadSnake.h};//переносим змейку в началу поля
    }
    if(newHeadSnake.y < 0 && direction === "up"){
        return{x: newHeadSnake.x, y: rowEdge, d: newHeadSnake.d, h: newHeadSnake.h};//переносим змейку в началу поля
    }
    if(newHeadSnake.y > rowEdge && direction === "down"){
        return{x: newHeadSnake.x, y: 0, d: newHeadSnake.d, h: newHeadSnake.h};//переносим змейку в началу поля
    }

    //если ни одно из условий не сработало то возвращаем объект таким же как и приняли
    return {x: newHeadSnake.x, y: newHeadSnake.y, d: newHeadSnake.d, h: newHeadSnake.h};
};

const _hasDirection = (snake, direction) => {//определяем направление движения, если не противоположное то true, иначе false
    const headSnake = _getHeadSnake(snake);//получаем текущую голову змейки

    if(
        (direction === "left" && headSnake.d !== "right") ||
        (direction === "right" && headSnake.d !== "left") ||
        (direction === "up" && headSnake.d !== "down") ||
        (direction === "down" && headSnake.d !== "up") 

    ){
        return true;
    }
    return false;
};

const _checkGrowth = () => {
    const {snake, food: {apples}} = state;
    const headSnake = _getHeadSnake(snake);

    if(apples.x === headSnake.x && apples.y === headSnake.y){
        state.food.didAte = true;
        state.snake.tail.unshift(state.snake.lastPosTail);
        state.snake.speed = state.snake.speed - 0.5;
    }
};

const _getHeadSnake = (snake) => {
    return snake.tail[snake.tail.length - 1];
};