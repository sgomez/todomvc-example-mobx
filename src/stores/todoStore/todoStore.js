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

    @action toggleAll() {
        const areAllMarked = this.todos.every(todo => todo.completed);

        this.todos = this.todos.map(todo => ({
            ...todo,
            completed: !areAllMarked,
        }));
    }

    @computed get activeCount() {
        return this.todos.reduce(
            (sum, todo) => sum + (todo.completed ? 0 : 1),
            0
        );
    }

    @computed get completedCount() {
        return this.todos.reduce(
            (sum, todo) => sum + (todo.completed ? 1 : 0),
            0
        );
    }
}

const todoStore = new TodoStore();

export default todoStore;
export { TodoStore };