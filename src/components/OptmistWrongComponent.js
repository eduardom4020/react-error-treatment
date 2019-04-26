import React, {Component} from 'react';

const thisWill = null;

class OptmistWrongComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const errorStrikesBack = thisWill.causeAnError;
    }

    render() {
        return(
            <span>{thisWill.causeAnError}</span>
        );
    }
};

export default OptmistWrongComponent;