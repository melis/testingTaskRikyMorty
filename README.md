Тестовая задача РикиМорти
На основе API https://rickandmortyapi.com/, реализовать React приложение, lazy-список героев из мультсериала (lazy-список - список, в котором элементы подгружаются с бекенда частями, т.е. когда скролл доходит до конца страницы - получаем следующую часть списка и т.д. пока у бекенда еще есть для нас данные).
По нажатию на персонажа должен осуществляться переход на отдельную страницу с подробной информацией о нём.
Для управлением стейта использовать Redux, для асинхронных запросов Redux-Saga. 
Для стилей использовать SCSS или StyledComponents.
Тесты приветствуются.

(Запросы пока на redux-thunk, могу преписать на saga,
еще на случай ошибок надо обработать, catch блоки надо дописать и на моболках пока не работает)
