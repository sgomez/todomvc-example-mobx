import React from 'react';
import { inject, observer } from 'mobx-react';

import TodoTextInput from '../TodoTextInput';

const Header = inject(
    'todoStore'
)(observer(({
    todoStore
}) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <TodoTextInput  newTodo
                            onSave={todoStore.add}
                            placeholder="What needs to be done?"
            />
        </header>
    );
}));

export default Header;