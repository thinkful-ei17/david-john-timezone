import React from 'react';
import Input from './Input';
import Selection from './Selection';
import Output from './Output';
var moment = require('moment');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInput: null,
      fromZone: 'PST',
      toZone: 'CST'
    };
  }
  nowTime(){
    return moment();
  }

  timeConverter(fromZoneTime) {
    const timeZones = {
      PST: -8,
      MST: -7,
      CST: -6,
      EST: -5
    }

    if (this.state.fromZone in timeZones && this.state.toZone in timeZones) {
      const to = timeZones[this.state.toZone];
      const result = this.state.timeInput;
      console.log(moment().add(to, 'h').format());
    }

    // const result = timeZones.filter(zone => zone === this.state.fromZone)
    // console.log(result);

    // const output = (this.state.toZone - this.state.fromZone) + this.state.timeInput;
    // console.log(output);
  }

  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Time Zone Converter</h1>
        </header>
        {this.timeConverter()}
        {this.nowTime()}
        {/* <Input onChange={e => this.setState({timeInput: e})}/> */}
        {/* <Selection onSelect={e=>this.setState({fromZone:e})} label='From ' /> */}
        <Selection onSelect={e=>this.setState({toZone:e})} label='To ' />
        <Output />
      </div>
    );
  }
}

export default App;

// PST -8
// MST -7
// CST -6
// EST -5

// 8:50

// from PST
// to EST

// -5 - -8 = +3
// 11:50
