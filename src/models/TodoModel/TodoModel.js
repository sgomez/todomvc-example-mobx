import { observable } from 'mobx';
import { uniqueId } from 'lodash';

class TodoModel {
    @observable description;
    @observable completed;

    constructor(description) {
        this.id = uniqueId('todo_');
        this.description = description;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }


}

export default TodoModel;