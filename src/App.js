import React from 'react';
import Selection from './Selection';
import Output from './Output';
var moment = require('moment-timezone');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInput: null,
      fromZone: 'America/New_York',
      toZone: ''
    };
  }

  render() {
    
    const now = moment().format('YYYY-MM-DD hh:mm');
    const fromTZ = moment.tz(now, this.state.fromZone).format();
    const toTZ = moment.tz(now, this.state.toZone).format();
    console.log('from', fromTZ, 'to', toTZ);
    // onChange={()=>this.timeConverter()}

    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Time Zone Converter</h1>
        </header>
        <Selection onSelect={e=>this.setState({fromZone:e})} label='From ' />
        <Selection onSelect={e=>this.setState({toZone:e})} label='To ' />
        <Output />
      </div>
    );
  }
}

export default App;