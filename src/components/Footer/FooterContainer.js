import React from 'react';
import { inject, observer } from 'mobx-react';

import { clearCompleted, setFilter } from '../../actions';
import Footer from './Footer';

const FooterContainer = inject(
    'viewStore',
    'todoStore'
)(observer(({
    viewStore,
    todoStore,
}) => {
    return (
        <Footer
            activeCount={todoStore.activeCount}
            completedCount={todoStore.completedCount}
            onChangeFilter={setFilter}
            onClearCompleted={clearCompleted}
            selectedFilter={viewStore.filter}
        />
    );
}));

export default FooterContainer;