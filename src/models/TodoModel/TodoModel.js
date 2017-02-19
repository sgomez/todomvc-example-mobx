import { observable } from 'mobx';
import { uniqueId } from 'lodash';

class TodoModel {
    @observable description;
    @observable completed;

    constructor(description, completed = false) {
        this.id = uniqueId('todo_');
        this.description = description;
        this.completed = completed;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

export default TodoModel;