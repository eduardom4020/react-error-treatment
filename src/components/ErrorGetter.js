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

    tryAgain = () => {
        this.setState({
            err: null,
            info: null
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
                    <br/>
                    <h5>Click to Refresh Component!</h5>
                    <button onClick={this.tryAgain} >Refresh</button>
                </Fragment>
        );
    }
}

export default ErrorGetter;