import React from 'react';
import { inject, observer } from 'mobx-react';

import TodoTextInput from '../TodoTextInput';

const Header = ({
    handleSaveTodo
}) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <TodoTextInput  newTodo
                            onSave={handleSaveTodo}
                            placeholder="What needs to be done?"
            />
        </header>
    );
};

Header.propTypes = {
    handleSaveTodo: React.PropTypes.func.isRequired,
};

const HeaderContainer = inject(
    'todoStore'
)(observer(({
    ...props
}) => (
    <Header handleSaveTodo={props.todoStore.add} />
)));

export default HeaderContainer;
export { Header };