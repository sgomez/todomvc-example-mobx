import todoStore from '../../stores/todoStore';

export function addTodo(description) {
    todoStore.add(description);
}

export function clearCompleted() {
    todoStore.clearCompleted();
}

export function toggleTodo(todo) {
    todo.completed = !todo.completed;
}

export function toggleAll() {
    todoStore.toggleAll();
}