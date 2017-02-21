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

const MainSection = observer(({
    handleEditing,
    handleToggleAll,
    editingTodo,
    filter,
    todos,
}) => {
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.filter((todo) => todo.completed).length;

    const handleToggleOne = (todo) => todo.toggle();
    const handleDeleteOne = (todo) => todo.destroy();
    const handleEditOne = (todo) => handleEditing(todo);

    return (
        <section className="main">
            <ToggleAllButton completedCount={completedCount}
                             count={todos.length}
                             onChange={handleToggleAll} />
            <ul className="todo-list">
                { filteredTodos.map( todo => (
                    <TodoItem key={todo.id}
                              editing={editingTodo === todo}
                              onChange={handleToggleOne}
                              onDelete={handleDeleteOne}
                              onEditing={handleEditOne}
                              todo={todo} />
                ))}
            </ul>
        </section>
    );
});

MainSection.propTypes = {
    handleEditing: React.PropTypes.func.isRequired,
    handleToggleAll: React.PropTypes.func.isRequired,
    editingTodo: React.PropTypes.object,
    filter: React.PropTypes.string.isRequired,
    todos: React.PropTypes.array.isRequired,
};

const MainSectionContainer = inject(
    'todoStore',
    'viewStore'
)(observer(({
    todoStore,
    viewStore,
}) => (
    <MainSection
            handleEditing={(todo) => viewStore.setEditingTodo(todo)}
            handleToggleAll={() => todoStore.toggleAll()}
            editingTodo={viewStore.editingTodo}
            filter={viewStore.filter}
            todos={todoStore.todos} />
)));

MainSectionContainer.wrappedComponent.propTypes = {
    todoStore: React.PropTypes.object.isRequired,
    viewStore: React.PropTypes.object.isRequired,
};

export default MainSectionContainer;
export { MainSection };