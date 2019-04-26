import React, {Fragment} from 'react';

const thisWill = null;

const WrongComponent = props => {
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
};

export default WrongComponent;