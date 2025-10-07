document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage and render them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Add a task to the DOM and optionally save to Local Storage
    function addTask(taskText, save = true) {
        if (!taskText) {
            alert('PLEASE ENTER A TASK');
            return;
        }
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
            // Remove from Local Storage
            const updatedTasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    addButton.addEventListener('click', () => {
        addTask(taskInput.value.trim(), true);
        taskInput.value = '';
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim(), true);
            taskInput.value = '';
        }
    });

    loadTasks();
});