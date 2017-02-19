import React from 'react';
import classnames from 'classnames';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters';

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed'
};

const ClearButton = ({
    completedCount,
    onClearCompleted
}) => {
    if (completedCount > 0) {
        return (
            <button className="clear-completed"
                    onClick={onClearCompleted}>
                Clear completed
            </button>
        );
    }

    return null;
};

const FilterLink = ({
    filter,
    onChangeFilter,
    selectedFilter
}) => {
    const title = FILTER_TITLES[filter];

    return (
        <a onClick={() => onChangeFilter(filter)}
           style={{cursor: 'pointer'}}
           className={classnames({ selected: filter === selectedFilter })}>
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
    completedCount,
    onChangeFilter,
    onClearCompleted,
    selectedFilter,
}) => {
    return (
        <footer className="footer">
            <TodoCount count={activeCount} />
            <ul className="filters">
                {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
                    <li key={filter}>
                        <FilterLink
                            filter={filter}
                            onChangeFilter={onChangeFilter}
                            selectedFilter={selectedFilter}/>
                    </li>
                )}
            </ul>
            <ClearButton completedCount={completedCount}
                         onClearCompleted={onClearCompleted}/>
        </footer>
    );
};

Footer.propTypes = {
    activeCount: React.PropTypes.number.isRequired,
    completedCount: React.PropTypes.number.isRequired,
    onChangeFilter: React.PropTypes.func.isRequired,
    onClearCompleted: React.PropTypes.func.isRequired,
    selectedFilter: React.PropTypes.string.isRequired,
};

export default Footer;