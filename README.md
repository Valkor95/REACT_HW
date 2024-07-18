# HW 85. Collapse.jsx

Реализуйте компонент <Collapse>, который по клику на ссылке отображает или скрывает свое содержимое. Если содержимое скрыто, то клик раскрывает его. И наоборот — если содержимое отображается, то клик скрывает контент. Содержимое передается в компонент через свойство text. За начальное состояние открытости, отвечает свойство opened, которое по умолчанию равно true.

Использование — https://github.com/junjun-it-courses/react-hw/blob/master/task-9/using.jsx

Рзультат — https://github.com/junjun-it-courses/react-hw/blob/master/task-9/layout.html

После клика к классу collapse элемента <div> добавляется класс show, a значение атрибута aria-expanded меняется на true.