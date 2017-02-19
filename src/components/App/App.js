import React from 'react';

import Header from "../Header";
import MainSection from "../MainSection";
import Footer from "../Footer";

import * as actions from '../../actions';

const App = () => (
    <div>
        <Header addTodo={actions.addTodo} />
        <MainSection />
        <Footer />
    </div>
);

export default App;
