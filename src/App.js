import React from 'react';
import './App.css';
import WrongComponent from './components/WrongComponent';
import OptmistWrongComponent from './components/OptmistWrongComponent';
import ErrorGetter from './components/ErrorGetter';

const App = () => (
    <ErrorGetter>
        <OptmistWrongComponent />
    </ErrorGetter>
);

export default App;
