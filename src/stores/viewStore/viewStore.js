import { action, observable } from 'mobx';
import { SHOW_ALL } from '../../constants/filters'

class ViewStore {
    @observable filter;
    @observable editingTodo;

    constructor() {
        this.filter = SHOW_ALL;
        this.editingTodo = null;
    }

    @action setFilter = (filter) => {
        this.filter = filter;
    };

    @action setEditingTodo = (todo) => {
        this.editingTodo = todo;
    };
}

const viewStore = new ViewStore();

export default viewStore;
export { ViewStore };