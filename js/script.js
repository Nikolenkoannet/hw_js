'use strict' ;

(function () {

    const form = document.querySelector('[data-todo-form]');
    const todoItemsContainer = document.querySelector('#todoItems');

    const createTodoItem = (title, description) => {
        const item = document.createElement('div');
        item.className = 'taskWrapper';
        item.innerHTML = `<div class="taskHeading">${title}</div>
                          <div class="taskDescription">${description}</div>`;
        return item;
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const title = form.querySelector('input[name="title"]').value;
        const description = form.querySelector('textarea[name="description"]').value;



        if (!title || !description) {
            alert("Please fill in all fields!");
            return;
        }

        const todoItemElement = createTodoItem(title, description);
        todoItemsContainer.prepend(todoItemElement);
        form.reset();
    }

    form.addEventListener('submit', submitHandler);

})();