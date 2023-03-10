export const createTodo = (title, description, dueDate, priority, notes) => {
  
    return {
        title, 
        description, 
        dueDate, 
        priority,
        notes
    };
};

export const renderTodo = () => {
    const todoContainer = document.createElement('div');
         todoContainer.id = 'todo-container';
 
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

     const checklist =  document.createElement('button');
         checklist.setAttribute('type', 'submit');
 
           document.getElementById('daily-todo-overview').appendChild(todoContainer)
                 todoContainer.appendChild(inputTitle);
                 todoContainer.appendChild(inputDescription);
                 todoContainer.appendChild(inputDueDate);
                 todoContainer.appendChild(priorityOne);
                 todoContainer.appendChild(priorityTwo);
                 todoContainer.appendChild(priorityThree);
                 todoContainer.appendChild(checklist);

};


