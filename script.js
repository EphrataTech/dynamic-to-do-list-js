document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText ) {
            alert('PLEASE ENTER A TASK');
            return;
        }
         const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('remove-btn');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        taskInput.value = '';

    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    document.addEventListener('click', addTask);


        
    


    

});

