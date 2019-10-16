import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './components/SeasonsDisplay'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lat: null, errorMessage: '' };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({errorMessage: err.message })
    );
  }
  render() {
    const { lat, errorMessage } = this.state
    if( errorMessage && !lat) {
      return(
      <div>
        Error: { errorMessage }
      </div>
      )
    }
    if( !errorMessage && lat) {
      return <SeasonDisplay lat={lat}/>
    }
    return (
      <div> Loading!</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))