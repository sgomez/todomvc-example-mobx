import React from 'react';
import { Provider } from 'mobx-react';

import { ViewStore } from '../../src/stores/viewStore/viewStore';
import { TodoStore } from "../../src/stores/todoStore/todoStore";

const viewStore = new ViewStore();
const todoStore = new TodoStore();
const StoreDecorator = (story) => (
    <Provider viewStore={viewStore} todoStore={todoStore}>
        {story()}
    </Provider>
);

export default StoreDecorator;
