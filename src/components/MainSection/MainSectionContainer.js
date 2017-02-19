import React from 'react';
import { inject, observer } from 'mobx-react';

import { toggleAll, toggleTodo } from '../../actions';
import MainSection from './MainSection';

const MainSectionContainer = inject(
    'viewStore',
    'todoStore'
)(observer(({
    viewStore,
    todoStore,
}) => {
    return (
        <MainSection
            filter={viewStore.filter}
            onChange={toggleTodo}
            onToggle={toggleAll}
            todos={todoStore.todos}
        />
    );
}));

export default MainSectionContainer;
