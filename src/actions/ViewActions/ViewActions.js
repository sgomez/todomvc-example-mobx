import viewStore from '../../stores/viewStore';

export function setFilter(filter) {
    viewStore.filter = filter;
}

export function editAction(todo) {
    viewStore.editingTodo = todo;
}