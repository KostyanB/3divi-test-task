# "3divi-task"

Тестовое задание

## О приложениии

Приложение для визуализации распределения возрастов посетителей по дням недели.

[Демо](https://divi-test-task.web.app)

- Для реализации наглядности данные предварительно получены по предоставленному запросу, дополнены произвольным таймингом продолжительности и помещены в файл `public/db/db.json`. В демо-версии запрос осуществляется к указанному файлу.
- В левой колонке ID девайсов с возможностью фильтрации. При загрузке выбраны все девайсы.
- Скролл колонки девайсов при ее переполнении.
- В правой колонке сводная диаграмма времени посещений по дням недели.
- Разметка вертикальной оси времени посещений адаптируется к данным дня с максимальной продолжительности посещений.

## Стек и технологии

- ReactJS, Redux, Redux Toolkit, Hooks, Styled Components, Context Provider, Grid/Flex, RestAPI.
- Настройки приложения в файле `env.json`.
- Сборка с помощью [Create React App](https://github.com/facebook/create-react-app).
- Деплой демо готовой сборки на [Firebase Hosting](https://firebase.google.com).

## Как установить?

- Скопировать содержимое репозитория в рабочую папку
- В терминале выполнить команду `npm install`
- В случае создания проекта с помощью Create React App дополнительно установить пакеты из `add_packages.txt`.
- Запустить development mode командой `npm start`.
- Открыть `http://localhost:3000` для просмотра в браузере.
- Для сборки приложения команда `npm run build`. Готовый проект будет в папке `build` рабочей директории.
