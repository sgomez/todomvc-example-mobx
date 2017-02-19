import React from 'react';
import { observer } from 'mobx-react';

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

const MainSection = observer(({
    filter,
    onChange,
    onToggle,
    todos
}) => {
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.reduce((count, todo) =>
        todo.completed ? count + 1 : count,
        0
    );

    return (
        <section className="main">
            <ToggleAllButton completedCount={completedCount}
                             count={todos.length}
                             onChange={onToggle} />
            <ul className="todo-list">
                { filteredTodos.map( todo => (
                    <TodoItem key={todo.id} todo={todo} onChange={onChange}/>
                ))}
            </ul>
        </section>
    );
});

MainSection.propTypes = {
    filter: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    todos: React.PropTypes.object.isRequired,
};

export default MainSection;