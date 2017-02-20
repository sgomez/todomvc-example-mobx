import React from 'react';
import classnames from 'classnames';
import { inject, observer } from 'mobx-react';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters';

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed'
};

const ClearButton = ({
    completedCount,
    onClick
}) => {
    if (completedCount > 0) {
        return (
            <button className="clear-completed"
                    onClick={() => onClick(null)}>
                Clear completed
            </button>
        );
    }

    return null;
};

const FilterLink = ({
    activeFilter,
    filter,
    onClick
}) => {
    const title = FILTER_TITLES[filter];

    return (
        <a onClick={() => onClick(filter)}
           style={{cursor: 'pointer'}}
           className={classnames({ selected: filter === activeFilter })}>
            {title}
        </a>
    );
};

const TodoCount = ({
    count
}) => {
    const itemWord = count === 1 ? 'item' : 'items';

    return (
        <span className="todo-count">
            <strong>{ count || 'No' }</strong> {itemWord} left
        </span>
    );
};

const Footer = inject(
    'todoStore',
    'viewStore'
)(observer(({
    todoStore,
    viewStore
}) => (
    <footer className="footer">
        <TodoCount count={todoStore.activeCount} />
        <ul className="filters">
            {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
                <li key={filter}>
                    <FilterLink filter={filter} activeFilter={viewStore.filter} onClick={viewStore.setFilter} />
                </li>
            )}
        </ul>
        <ClearButton completedCount={todoStore.completedCount} onClick={() => todoStore.clearCompleted()} />
    </footer>
)));


export default Footer;