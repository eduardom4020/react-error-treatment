import React, {Fragment, Component} from 'react';

class ErrorGetter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            err: null,
            info: null
        }
    }

    componentDidCatch(err, info) {
        console.log('Catched Error', err);

        this.setState({
            err: err.toString(),
            info: info.componentStack
        });
    }

    render() {
        const { children } = this.props;
        const { err, info } = this.state;

        return(
            !err ? 
                children
            :
                <Fragment>
                    <h1>ERROR!</h1>
                    <span>{info}</span>
                    <br/>
                    <span>{err}</span>
                </Fragment>
        );
    }
}

export default ErrorGetter;