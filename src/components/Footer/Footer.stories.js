import React from 'react';
import { action, storiesOf } from '@kadira/storybook';

import { Footer } from './Footer';
import { SHOW_ALL } from '../../constants/filters';

import 'todomvc-app-css/index.css';

const mockupHandleChangeFilter = (filter) => {
    const handleChangeFilter = action('Filter changed');
    handleChangeFilter(filter);
};

const mockupHandleClearCompleted = () => {
    const handleClearCompleted = action('Clear completed');
    handleClearCompleted();
};

storiesOf('Footer', module)
    .add('With no activities', () => (
        <Footer
            activeCount={0}
            activeFilter={SHOW_ALL}
            completedCount={0}
            handleChangeFilter={mockupHandleChangeFilter}
            handleClearCompleted={mockupHandleClearCompleted}
            />
    ))
    .add('With one activity incompleted', () => (
        <Footer
            activeCount={1}
            activeFilter={SHOW_ALL}
            completedCount={0}
            handleChangeFilter={mockupHandleChangeFilter}
            handleClearCompleted={mockupHandleClearCompleted}
        />
    ))
    .add('With actitivies incompleted', () => (
        <Footer
            activeCount={3}
            activeFilter={SHOW_ALL}
            completedCount={0}
            handleChangeFilter={mockupHandleChangeFilter}
            handleClearCompleted={mockupHandleClearCompleted}
        />
    ))
    .add('With actitivies, some completed', () => (
        <Footer
            activeCount={3}
            activeFilter={SHOW_ALL}
            completedCount={2}
            handleChangeFilter={mockupHandleChangeFilter}
            handleClearCompleted={mockupHandleClearCompleted}
        />
    ))
;
