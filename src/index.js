import './style.scss';
import { createTodo, renderTodo } from './todo';

const renderDOM = (() => {

    const container = document.createElement('div');
        container.id = 'container';
        document.body.appendChild(container);

    const navigationBar = document.createElement('div');
        navigationBar.id = 'navigation-bar';

    const sidebar = document.createElement('div');
        sidebar.id = 'sidebar';

    const dailyTodoOverview = document.createElement('div');
        dailyTodoOverview.id = 'daily-todo-overview';
    
        container.appendChild(navigationBar);
        container.appendChild(sidebar);
        container.appendChild(dailyTodoOverview);
        renderTodo();
        const todo = createTodo('This is a Title', 'This is a Description', 'This is a date', 'This is a Priority', 'This is a note');
        console.log(todo);
        
})();