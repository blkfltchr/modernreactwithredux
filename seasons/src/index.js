import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import './index.css';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // THIS IS THE ONLY TIME we do direct assignment to this.state
    //     // in this example, the constructor's only job is to initialize state
    //     this.state = {
            
    //     };
    // }

    // equivalent to what's above
    state = {
        lat: null,
        long: null,
        errorMessage: '' 
    }; 
    
    // best practice: data loading should happen here 
    // and/or in componentDidUpdate rather than in the constructor 
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ 
                    lat: position.coords.latitude, 
                    long: position.coords.longitude 
                }),
            error => this.setState({ errorMessage: error.message })
        );
    }

    renderContent() {
        console.log("state", this.state);
        if (this.state.errorMessage) {
            return (
                <h1 className="warning">{this.state.errorMessage}</h1>
            )
        } if (!this.state.lat && !this.state.long) {
            return (
                <Loader />
                ) 
        }
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} long={this.state.long} />
                </div>
            );
    }

    // React says we have to define render!!
    render() { 
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}
 
export default App;
 
ReactDOM.render(<App />, document.querySelector("#root"));