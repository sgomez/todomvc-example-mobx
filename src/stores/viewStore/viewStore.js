import { observable } from 'mobx';
import { SHOW_ALL } from '../../constants/filters'

class ViewStore {
    @observable filter;
    @observable editingTodo;

    constructor() {
        this.filter = SHOW_ALL;
        this.editingTodo = null;
    }
}

const viewStore = new ViewStore();

export default viewStore;
export { ViewStore };