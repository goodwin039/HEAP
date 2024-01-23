const map1 ={
    cords: [],
    completed: 94//после того как съедаем 94-ю игра останавливается
};

const map2 ={
    cords: [],
    completed: 94
};

const map3 ={
    cords: [],
    completed: 94
};

const map4 ={
    cords: [],
    completed: 94
};

//генератор координат препятствия
const generateMap = (map, axis, from, to, numRestAxis) => {
    
    const countIteration = to - from;//какой длины будет линия
    const getRestAxis = (axis === "x") ? "y" : "x";
    let cords;
    
    for(let i = 0; i < countIteration; i++){//нужное количество координат
        cords = {[axis]: from+i, [getRestAxis]: numRestAxis};
        map.cords.push(cords);
    }

    //вычитаем из completed диапазон препятствий который указали чтобы узнать сколько яблок должна съесть змейка чтобы перейти на следующий уровень. Чистое поле без препятствий и змейки 400 (row x row). Змея занимает пространство 4 клетки, отсюда для перехода на следующий уровень нужно съесть (row x row)-4
    map.completed = map.completed - countIteration;
};

generateMap(map2, "x", 6, 13, 8);