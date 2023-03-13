import { newTodo } from "./todo";

const todoArray = [];

export const renderTodo = () => {
    
    const todoContainer = document.createElement('div');
         todoContainer.id = 'todo-container';
         todoContainer.classList.add('hidden');
 
     const inputTitle = document.createElement('input');
         inputTitle.setAttribute('type', 'text');
     
     const inputDescription = document.createElement('textarea');
         inputDescription.setAttribute('type', 'text');
 
     const inputDueDate = document.createElement('input');
         inputDueDate.setAttribute('type', 'date');
     
     const priorityOne = document.createElement('button');
         priorityOne.id = 'priority-one';

     const priorityTwo = document.createElement('button');
         priorityTwo.id = 'priority-two';

     const priorityThree = document.createElement('button');
         priorityThree.id = 'priority-three';

     const submitTodo =  document.createElement('button');
         submitTodo.setAttribute('type', 'submit');
         submitTodo.textContent = 'Save';
    
        submitTodo.addEventListener('click', () => {
            let addNewTodo = newTodo(inputTitle.value, inputDescription.value, inputDueDate.value);
            todoArray.push(addNewTodo);
        
                const todo = document.createElement('div');
                document.getElementById('daily-todo-overview').appendChild(todo);

                const checkboxBtn = document.createElement('input');
                checkboxBtn.setAttribute('type', 'checkbox');

                const todoInfo = document.createElement('div');
                    todoInfo.id = 'todo-info';
                    todoInfo.textContent = `${inputTitle.value + inputDescription.value + inputDueDate.value}`;
                 
                    todoInfo.appendChild(checkboxBtn);
                    todo.appendChild(todoInfo);

           
        });

        priorityOne.addEventListener('click', () => {
            newTodo.priority = 'green';
        });
            
           document.getElementById('daily-todo-overview').appendChild(todoContainer);
                 todoContainer.appendChild(inputTitle);
                 todoContainer.appendChild(inputDescription);
                 todoContainer.appendChild(inputDueDate);
                 todoContainer.appendChild(priorityOne);
                 todoContainer.appendChild(priorityTwo);
                 todoContainer.appendChild(priorityThree);
                 todoContainer.appendChild(submitTodo);
};



