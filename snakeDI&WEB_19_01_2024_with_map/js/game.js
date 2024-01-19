const onload = () => {
    //обращаемся к элементу канвас и его контексту
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //задаём ширину и высоту игрового поля
    canvas.width = width;
    canvas.height = height;

    //функция для заполнения поля
    const renderGame = () => {
        ctx.clearRect(0,0,width,height);//очищаем холст при каждом вызове функции renderGame()
        
        for(let y = 0; y < row; y++){
            for(let x=0; x<row; x++){
                ctx.fillStyle = "aqua";//обращаемся к канвас и делаем заливку
                ctx.fillRect(x*ceil,y*ceil,(ceil-1),(ceil-1));//координаты х и у, ширина и высота. Умножаем х и у чтобы указать с какого следующего места рисовать квадрат
                
                //выводим змейку
                state.snake.tail.forEach(s => {
                    //сравниваем координаты поля с координатами змейки, если совпало то отрисовываем клеточки
                    if (s.x === x && s.y === y) {
                        ctx.fillStyle = colors.snakeBody;
                        ctx.fillRect(x*ceil,y*ceil,(ceil-1),(ceil-1));
                        //отрисовываем голову
                        if (s.h) {
                            ctx.fillStyle = colors.snakeHead;
                            ctx.fillRect(x*ceil,y*ceil,(ceil-1),(ceil-1));
                        }
                    }
                });

                state.maps[`map${state.level}`].cords.forEach(m => {
                    if(m.x === x && m.y === y){
                        ctx.fillStyle = colors.wall;
                        ctx.fillRect(x*ceil,y*ceil,(ceil-1),(ceil-1));
                    }
                });
            }
        }
    };
    renderGame(); 

    let startTime = 0,
        currentTime = 0,
        time = 0,
        currentSecond = 0;

    animateRAFInterval.start(() => {
        if(startTime === 0){
            startTime = new Date().getTime();            
        }

        currentTime = new Date().getTime();
        time = currentTime - startTime;
        currentSecond = Math.floor(time/400);//скорость змейки

        if(currentSecond > 0){
            startTime = 0;
            moveSnake();
            renderGame();//чтобы перерисовывать игровое поле
        }
    }); 

    //определяем код нажатой клавиши
    // const onekeydown = (e) => {
    //     console.log(e.keyCode);
    // };

    const onekeydown = (e) => {
        changeDirection(e.keyCode);
        
        
        // console.log(state.snake);
    };
    document.addEventListener("keydown", onekeydown);

};

window.addEventListener("load", onload);