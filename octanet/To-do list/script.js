function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const task = taskInput.value.trim();
    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function() {
        if (checkbox.checked) {
            taskSpan.classList.add('completed');
        } else {
            taskSpan.classList.remove('completed');
        }
    };

    const taskSpan = document.createElement('span');
    taskSpan.textContent = task;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.onclick = function() {
        const newTask = prompt('Edit task:', taskSpan.textContent);
        if (newTask !== null && newTask.trim() !== '') {
            taskSpan.textContent = newTask.trim();
        }
    };

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = '';
}
