import React from 'react';
import { inject, observer } from 'mobx-react';

import TodoItem from '../TodoItem';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters';

const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: todo => !todo.completed,
    [SHOW_COMPLETED]: todo => todo.completed
};

const ToggleAllButton = ({
    completedCount,
    count,
    onChange,
}) => {

    if (count > 0) {
        return (
            <input className="toggle-all"
                   checked={completedCount === count}
                   onChange={onChange}
                   type="checkbox" />
        );
    }

    return null;
};

const MainSection = inject(
    'todoStore',
    'viewStore'
)(observer(({
    todoStore,
    viewStore,
}) => {
    const filteredTodos = todoStore.todos.filter(TODO_FILTERS[viewStore.filter]);

    const handleDelete = (todo) => { todoStore.remove(todo)};
    const handleToggleOne = (todo) => { todo.toggle() };
    const handleToggleAll = () => { todoStore.toggleAll() };

    return (
        <section className="main">
            <ToggleAllButton completedCount={todoStore.completedCount}
                             count={todoStore.todos.length}
                             onChange={handleToggleAll} />
            <ul className="todo-list">
                { filteredTodos.map( todo => (
                    <TodoItem key={todo.id}
                              onChange={handleToggleOne}
                              onDelete={handleDelete}
                              todo={todo} />
                ))}
            </ul>
        </section>
    );
}));

export default MainSection;