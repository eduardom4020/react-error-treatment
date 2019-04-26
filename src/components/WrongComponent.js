import React, {Fragment, Component} from 'react';

const thisWill = null;

class WrongComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const errorStrikesBack = thisWill.causeAnError;
    }

    render() {
        try {
            return(
                <span>{thisWill.causeAnError}</span>
            );
        } catch (err) {
            return (
                <Fragment>
                    <h1>ERROR!</h1>
                    <span>{err.toString()}</span>
                </Fragment>
            );
        }
    }
};

export default WrongComponent;