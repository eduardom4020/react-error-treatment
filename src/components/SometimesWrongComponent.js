import React from 'react';

const itWill = null;

const SometimesWrongComponent = props => (
    <span>{Math.random() < .5 ? 'Everything Ok!' : itWill.Break}</span>
);

export default SometimesWrongComponent;