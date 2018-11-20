import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

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

    // React says we have to define render!!
    render() { 
        console.log("state", this.state);
        if (this.state.errorMessage) {
            return (
                <h1 style={{color: "red"}}>{this.state.errorMessage}</h1>
            )
        } if (!this.state.lat && !this.state.long) {
            return (
                <div>loading...</div>
                ) 
        }
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} long={this.state.long} />
                </div>
            );
    }
}
 
export default App;
 
ReactDOM.render(<App />, document.querySelector("#root"));