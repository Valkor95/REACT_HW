# HW 88. TodoBox.jsx

Реализуйте простой Todo, с возможностью добавлять и удалять заметки.

src/TodoBox.jsx
Основной компонент, который выводит форму для добавления новой записи и выводит список заметок на экран.

Начальный HTML — https://github.com/junjun-it-courses/react-hw/blob/master/task-11/layout.html

src/Item.jsx
Отрисовывает конкретный элемент списка. Принимает на вход свойства:

task
onRemove
HTML с добавленными заметками — https://github.com/junjun-it-courses/react-hw/blob/master/task-11/layout2.html

Добавление элементов происходит в обратном порядке. Новые всегда сверху.

Подсказки
Для получения нового id используйте функцию uniqueId