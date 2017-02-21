import { observable } from 'mobx';
import { uniqueId } from 'lodash';

class TodoModel {
    store;
    id;
    @observable description;
    @observable completed;

    constructor(description, store) {
        this.id = uniqueId('todo_');
        this.store = store;
        this.description = description;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }

    destroy() {
        this.store.todos.remove(this);
    }
}

export default TodoModel;