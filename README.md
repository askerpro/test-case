Тестовое задание для [вакансии](https://career.habr.com/vacancies/1000058278).

## Задание

[Описание задания](https://docs.google.com/document/d/1buQL8vMhpntS462-2YMJ9FSuKduwy-avt_jjgeDgxlU/edit#heading=h.6bb7ljsevygw).

## React-create-app
Для быстрого старта был взят React-create-app с typescript. Для своих проектов babel, webpack, eslint и docker я настраиваю вручную.
[Пример проекта по ссылке](https://github.com/askerpro/react-redux)

### Запуск сервера

```yarn build && yarn start```

Предварительно установить зависимости!

```yarn```

### Заглушка для api

 [Эмуляция загрузки данных с сервера с валидацией JSON schema и  AJV](/src/api/items/data.ts).
 
 Данные лежат в рекурсивном формате
 
 ```
 interface Item {
    id: string;
    name: string;
    img: string;
    price: number;
}
 
 interface Category{
    id: string;
    name: string;
    img: string;
    categories?: Category[];
    items?: Item[];
 }
 ```
 
 сервер получает путь к запрашиваемым данным, затем функция [```getData()```](/src/api/items/data.ts) рекурсивно доходит до нужного уровня вложенности и возвращает его.
 
Функция [```fetch()```](/src/api/items/data.ts) ловит запрос от клиента, получает данные и порционно выдает обратно.
 
 ### Redux Toolkit
 
 Для использования typesafe actions была использована официальная библиотека от redux, которая позволяет в редьюсере получать типизированные TYPE и payload. Так-же в редьюсер кидается draft state, который можно мутировать, т.е. не нужно возвращать из редьюсера {...state, ...bla bla}, а можно сразу state.a = b; return state;
 
 
 ### Stylus
 Для своих проектов я использую [Material-ui](https://material-ui.com/) вместе со [styled-components](https://styled-components.com/), но в задании было сказано взять css-препроцессор, решил попробовать стилус. 
 Все-таки css-in-js мне ближе )
 
 
 