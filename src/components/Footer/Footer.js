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
                    onClick={onClick}>
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

const Footer = ({
    activeCount,
    activeFilter,
    completedCount,
    handleChangeFilter,
    handleClearCompleted,
}) => (
    <footer className="footer">
        <TodoCount count={activeCount} />
        <ul className="filters">
            {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
                <li key={filter}>
                    <FilterLink filter={filter} activeFilter={activeFilter} onClick={handleChangeFilter} />
                </li>
            )}
        </ul>
        <ClearButton completedCount={completedCount} onClick={handleClearCompleted} />
    </footer>
);

Footer.propTypes = {
    activeCount: React.PropTypes.number.isRequired,
    activeFilter: React.PropTypes.string.isRequired,
    completedCount: React.PropTypes.number.isRequired,
    handleChangeFilter: React.PropTypes.func.isRequired,
    handleClearCompleted: React.PropTypes.func.isRequired,
};

const FooterContainer = inject(
    'todoStore',
    'viewStore',
)(observer(({
    todoStore,
    viewStore
}) => (
    <Footer activeCount={todoStore.activeCount}
            activeFilter={viewStore.filter}
            completedCount={todoStore.completedCount}
            handleClearCompleted={() => todoStore.clearCompleted()}
            handleChangeFilter={viewStore.setFilter} />
)));

FooterContainer.wrappedComponent.propTypes = {
    todoStore: React.PropTypes.object.isRequired,
    viewStore: React.PropTypes.object.isRequired,
};

export default FooterContainer;
export { Footer };