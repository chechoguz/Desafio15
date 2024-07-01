let tasks = [
  { id: 1, description: 'Leer material de estudio', completed: false },
  { id: 2, description: 'Revisar desafío', completed: false },
  { id: 3, description: 'Realizar desafío', completed: false }
];
let taskId = tasks.length;

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
});

document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskDescription = taskInput.value.trim();
    
    if (taskDescription) {
        tasks.push({ id: ++taskId, description: taskDescription, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function toggleTaskCompletion(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskRow = document.createElement('tr');
        
        taskRow.innerHTML = `
            <td>${task.id}</td>
            <td class="${task.completed ? 'completed' : ''}">${task.description}</td>
            <td>
                <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTaskCompletion(${task.id})">
            </td>
            <td>
                <button onclick="deleteTask(${task.id})">❌</button>
            </td>
        `;
        
        taskList.appendChild(taskRow);
    });
    
    document.getElementById('total-tasks').textContent = tasks.length;
    document.getElementById('completed-tasks').textContent = tasks.filter(task => task.completed).length;
}