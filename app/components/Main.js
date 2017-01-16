import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

ReactDOM.render(<Main name="John"/>, document.getElementById('app'));