// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://jsonplaceholder.typicode.com/photos?_page=0&_limit=5, где GET-параметр _page — это число из первого input, а GET-параметр _limit — это введённое число второго input.
// Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://jsonplaceholder.typicode.com/photos?_page=5&_limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).

// Удачи!

const btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    const input1 = document.querySelector(".input1").value;
    const input2 = document.querySelector(".input2").value;

    // Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
    if (((Number(input1)<1 || Number(input1)>10) || isNaN(Number(input1))) && ((Number(input2)<1 || Number(input2)>10) || isNaN(Number(input2)))) {
        const divRes = document.querySelector(".res");
        divRes.innerText = "«Номер страницы и лимит вне диапазона от 1 до 10»";
    }
    else{// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
        if ((Number(input1)<1 || Number(input1)>10) || isNaN(Number(input1))) {
            console.log(Number(input1));
            const divRes = document.querySelector(".res");
            divRes.innerText = "«Номер страницы вне диапазона от 1 до 10»";        
        }
        else{// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
            console.log(Number(input1));
            const divRes = document.querySelector(".res");
            divRes.innerText = "";
            if ((Number(input2)<1 || Number(input2)>10) || isNaN(Number(input2))) {
                divRes.innerText = "«Лимит вне диапазона от 1 до 10»";
            }
            else{
                //Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://jsonplaceholder.typicode.com/photos?_page=0&_limit=5, где GET-параметр _page — это число из первого input, а GET-параметр _limit — это введённое число второго input.
                const params = new URLSearchParams({
                    _page: input1,
                    _limit: input2,
                });
                let arrayOfImages = []; 
                // fetch(`https://jsonplaceholder.typicode.com/photos${params}`); 
                arrayOfImages.push(fetch(`https://jsonplaceholder.typicode.com/photos${params}`)); 
                localStorage.setItem('images', JSON.stringify(arrayOfImages));
                const list = localStorage.getItem('images')
                if(list){
                initFunctionPaint(JSON.parse(list))
                }
            }
        }
    }    
});




