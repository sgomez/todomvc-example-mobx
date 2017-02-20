import { action, computed, observable } from 'mobx';
import TodoModel from '../../models/TodoModel';

class TodoStore {
    @observable todos;

    constructor() {
        this.todos = [];
    }

    @action add = (description) => {
        this.todos.push(new TodoModel(description));
    };

    @action clearCompleted () {
        this.todos = this.todos.filter(
            todo => !todo.completed
        );
    }

    @action remove(todo) {
        this.todos.remove(todo);
    }

    @action toggleAll() {
        const areAllMarked = this.todos.every(todo => todo.completed);

        this.todos.forEach(todo => {
            todo.completed = !areAllMarked;
        });
    }

    @computed get activeCount() {
        return this.todos.filter(todo => !todo.completed).length;
    }

    @computed get completedCount() {
        return this.todos.filter(todo => todo.completed).length;
    }
}

const todoStore = new TodoStore();

export default todoStore;
export { TodoStore };