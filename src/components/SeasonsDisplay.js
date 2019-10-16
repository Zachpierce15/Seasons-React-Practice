import React from 'react'

class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        Latitude: {this.props.lat}
      </div>
    )
  }
}
export default SeasonDisplay