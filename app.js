
 var  taskInput = document.getElementById('taskInput');
 var  addTaskButton = document.getElementById('addTaskButton');
 var  taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
     var  taskText = taskInput.value.trim();
        if (taskText !== '') {
            var li = document.createElement('li');
            li.className = 'task';
            li.innerHTML = `
                <span>${taskText}</span>
                <input type="checkbox" class="completeCheckbox">
                
                <button class="deleteButton">Delete</button>
            `;
            
            taskList.appendChild(li);

            var completeButton = li.querySelector('.completeCheckbox');
            completeButton.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            var deleteButton = li.querySelector('.deleteButton');
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            taskInput.value = '';
           
        }
    }
    
addTask();
