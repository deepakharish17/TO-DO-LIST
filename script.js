document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(deleteButton);
        document.getElementById('tasks').appendChild(li);
        
        document.getElementById('new-task').value = '';
    }
});
