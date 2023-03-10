import './style.scss';
import { createTodo } from './todo';
import { renderTodo } from './DOM_modoule';

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
        createTodo();
        renderTodo();        
})();

