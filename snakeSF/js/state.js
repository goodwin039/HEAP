const state = {
    snake:{
        tail:[
            {x: 0, y: 4, d:"right", h: false},
            {x: 1, y: 4, d:"right", h: true},
            
        ],
        direction: "right",
        lastPosTail: {},//координаты хвоста змейки
        speed:300
    },
    food:{
        didAte: true,//съедена еда или нет
        apples: {}
    },
    level: 1,
    maps: {// на будущее может уровни будут
        "map1": map1,
        "map2": map2,
        "map3": map3,
        "map4": map4
    }
};
