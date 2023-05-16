# Test project with React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Task

- Сверстайте и напишите js-компонент смены статуса пользователя. 
- Макет должен быть свёрстан адаптивно. 
- Элемент выпадающего списка нужно наполнить данными из прилагаемого JSON: 
  - в JSON-файле есть список городов и значение численности населения для каждого 
  - в выпадающий список должны попасть только города с населением превышающим 50000 
  - список городов в выпадающем списке нужно отсортировать по алфавиту, но на первое место поставить город с наибольшим значением численности населения. 
- При нажатии на ссылку «Сменить статус» должно появиться поле для ввода текста, значением которого будет текущий статус, с возможностью его отредактировать и сохранить. 
- Сохранённый статус должен отображаться в серой плашке. 
- Все поля формы, кроме значения статуса и чекбокса, обязательны для заполнения. 
- Должна быть реализована валидация на клиенте. 
- При отправке формы показываем дату и время последнего изменения рядом с кнопкой отправки формы. 
- Из данных формы при отправке нужно сформировать JSON и вывести его в консоль. 

## [Layout](https://www.figma.com/file/9aYq1pfUnK2ryJA2HnKc58/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82?type=design&node-id=0%3A1&t=qUKoYEkCGw5g40U2-1)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
