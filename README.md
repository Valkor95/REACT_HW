# HW 95. TodoList

Вам потрібно написати todoList такий як ми писали на уроці але з доп функціоналом

Технології

1. Material UI - https://mui.com/material-ui/
2. Formik - https://formik.org/
3. PropTypes
4. react-router
5. Yup
6. css-modules

ОПИС

Головна сторінка

1. Форма для створення
2. Список елементів
3. всі дані проходять через localStorage
4. Можливість видалення todo-item
5. Можливість перегляду todo-item
6. Можливість зміни стану todo-item (completed, not-completed, pending) (select)

Сторінка todo-item

При перегляді todo-item ви переходите на окрему сторінку, на якій є змога:

1. Видаляти поточний елемент
2. Змінювати стан todo-item (select)
3. редагувати title та description
4. Всі зміни прозодять через localStorage
Після видалення користувача кидає на головну сторінку

Після редагування юзер баче вспливаюче повиідомлення про успішне редагування

Сторінка всіх todo

Просто список всіх todo-items в корі є в localStorage, з можливістю переходу на кожен окремий, але без можливості редагування на цій сторінці.