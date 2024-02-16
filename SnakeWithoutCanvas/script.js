

  // Скорость змейки в мс
  var snakeSpeed = 125;

  // Получаем ссылку на игровое поле
  var gameBoard = document.querySelector(".snake-game-container");
  
  // Размеры игрового поля
  var boardWidth = 300;
  var boardHeight = 300;
  
  // Размеры квадрата
  var squareSize = 30;
  
  // Инициализация змейки
  var snake = [
    { x: 0, y: 0 },
  ];
  // Инициализация позиции яблока
  var apple = { x: 10, y: 10 };
  
  // Количество очков
  var score = 0;
  
  // Рисуем змейку
  function drawSnake() {
    for (var i = 0; i < snake.length; i++) {
      var snakePart = document.createElement("div");
      snakePart.className = "snake";
      snakePart.style.left = snake[i].x * squareSize + "px";
      snakePart.style.top = snake[i].y * squareSize + "px";
      gameBoard.appendChild(snakePart);
    }
  }
  
  // Рисуем яблоко
  function drawApple() {
    var appleElement = document.createElement("div");
    appleElement.className = "apple";
    appleElement.style.left = apple.x * squareSize + "px";
    appleElement.style.top = apple.y * squareSize + "px";
    gameBoard.appendChild(appleElement);
  }
  
  // Удаляем предыдущие отрисованные элементы
  function clearBoard() {
    while (gameBoard.firstChild) {
      gameBoard.removeChild(gameBoard.firstChild);
    }
  }
  
  // Выводим количество очков
  function updateScore() {
    var scoreElement = document.getElementById("score");
    scoreElement.textContent = "Очки: " + score;
  }
  
  // Игровой цикл
  function gameLoop() {
    clearBoard();
    moveSnake();
    drawSnake();
    drawApple();
    updateScore();
  }


  // Изменение направления движения змейки
function changeDirection(keyCode) {
  // 37: влево, 38: вверх, 39: вправо, 40: вниз
  if ((keyCode === 37 || keyCode === 65) && direction !== "right") {
    direction = "left";
  } else if ((keyCode === 38 || keyCode === 87) && direction !== "down") {
    direction = "up";
  } else if ((keyCode === 39 || keyCode === 68) && direction !== "left") {
    direction = "right";
  } else if ((keyCode === 40 || keyCode === 83) && direction !== "up") {
    direction = "down";
  }
}

// Перемещение змейки
function moveSnake() {
  var head = { x: snake[0].x, y: snake[0].y };

  // Изменяем координаты головы в зависимости от направления
  if (direction === "right") {
    head.x++;
  } else if (direction === "left") {
    head.x--;
  } else if (direction === "up") {
    head.y--;
  } else if (direction === "down") {
    head.y++;
  }

  // Добавляем новую голову в начало змейки
  snake.unshift(head);

  // Проверяем, если змейка съела яблоко
  if (head.x === apple.x && head.y === apple.y) {
    // Генерируем новую позицию для яблока
    generateApple();
    // Увеличиваем счетчик на 1
    score += 1;
  } else {
    // Если змейка не съела яблоко, удаляем хвост
    snake.pop();
  }

  // Проверяем, если змейка столкнулась с собой или со стеной
  if (checkCollision()) {
    alert(`Ваш счет: ${score}`);
    // Запускаем новую игру
    resetGame();
  }
}

// Генерация новой позиции для яблока
function generateApple() {
  apple.x = Math.floor(Math.random() * (boardWidth / squareSize));
  apple.y = Math.floor(Math.random() * (boardHeight / squareSize));
}

// Проверка столкновения змейки
function checkCollision() {
  var head = snake[0];

  // Проверяем, если змейка столкнулась со стеной
  if (
    head.x < 0 ||
    head.x >= boardWidth / squareSize ||
    head.y < 0 ||
    head.y >= boardHeight / squareSize
  ) {
    return true;
  }

  // Проверяем, если змейка столкнулась с собой
  for (var i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }

  return false;
}

// Сброс игры
function resetGame() {
  snake = [
    { x: 0, y: 0 }
  ];
  direction = "right";
  generateApple();
  // Обнуляем количество очков
  score = 0;
}


//рисуем поле
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.snake-game-container');
  
    for (let i = 0; i < 10 * 10; i++) {
      const cell = document.createElement('div');
      container.appendChild(cell);
    }
});

// Обработка нажатий клавиш
document.addEventListener("keydown", function (event) {
  changeDirection(event.keyCode);
});


// Запуск игры
var direction = "right";
setInterval(gameLoop, snakeSpeed);





