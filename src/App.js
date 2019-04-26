import React from 'react';
import './App.css';
import WrongComponent from './components/WrongComponent';
import OptmistWrongComponent from './components/OptmistWrongComponent';
import SometimesWrongComponent from './components/SometimesWrongComponent';
import ErrorGetter from './components/ErrorGetter';

const App = () => (
    <ErrorGetter>
        <SometimesWrongComponent />
    </ErrorGetter>
);

export default App;
