// Selecionar elementos HTML
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Array para armazenar as tarefas
let todos = [];

// Função para adicionar uma nova tarefa
function addTodo() {
  event.preventDefault(); // Evita o comportamento padrão de atualização da página

  const todoText = input.value; // Obtém o valor do campo de entrada
  if (todoText.trim() !== '') {
    const todo = { text: todoText, completed: false }; // Cria um objeto de tarefa
    todos.push(todo); // Adiciona a tarefa ao array

    renderTodos(); // Atualiza a exibição das tarefas
    input.value = ''; // Limpa o campo de entrada
  }
}

// Função para marcar uma tarefa como concluída ou não concluída
function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed; // Inverte o estado de conclusão

  renderTodos(); // Atualiza a exibição das tarefas
}

// Função para remover uma tarefa
function removeTodo(index) {
  todos.splice(index, 1); // Remove a tarefa do array

  renderTodos(); // Atualiza a exibição das tarefas
}

// Função para renderizar as tarefas na lista
function renderTodos() {
  todoList.innerHTML = ''; // Limpa a lista

  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li'); // Cria um novo elemento <li>

    // Define a classe CSS com base no estado de conclusão da tarefa
    if (todo.completed) {
      todoItem.classList.add('completed');
    }

    // Cria os elementos HTML para exibir a tarefa
    const todoText = document.createElement('span');
    todoText.textContent = todo.text;

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Concluído';
    toggleButton.addEventListener('click', () => toggleCompleted(index));

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => removeTodo(index));

    // Adiciona os elementos à tarefa
    todoItem.appendChild(todoText);
    todoItem.appendChild(toggleButton);
    todoItem.appendChild(removeButton);

    // Adiciona a tarefa à lista
    todoList.appendChild(todoItem);
  });
}

// Adiciona o evento de envio do formulário para chamar a função addTodo()
form.addEventListener('submit', addTodo);
