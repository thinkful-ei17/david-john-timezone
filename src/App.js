import React from 'react';
import Input from './Input'
import Selection from './Selection'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInput: ''
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Time Zone Converter</h1>
          <Input onChange={e => this.setState({timeInput: e})}/>
        </header>
        <Selection/>
      </div>
    );
  }
}

export default App;
