import React from 'react';
import { inject, observer } from 'mobx-react';

import TodoTextInput from '../TodoTextInput';
import TodoModel from "../../models/TodoModel/TodoModel";

const Header = ({
    addTodo
}) => {
    const todo = new TodoModel();

    const handleSaveTodo = (description) => {
        if (description.length > 0) {
            addTodo(description);
        }
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <TodoTextInput newTodo
                           onSave={handleSaveTodo}
                           placeholder="What needs to be done?"
                           todo={todo} />
        </header>
    );
};

Header.propTypes = {
    addTodo: React.PropTypes.func.isRequired,
};

const HeaderContainer = inject(
    'todoStore'
)(observer(({
    todoStore
}) => (
    <Header addTodo={todoStore.add} />
)));

HeaderContainer.wrappedComponent.propTypes = {
    todoStore: React.PropTypes.object.isRequired,
};

export default HeaderContainer;
export { Header };