import './App.css';

import React, { Component } from 'react';

import Counter from './Counter/Counter';
import MessageDisplay from './MessageDisplay/MessageDisplay';
import ActionButton from './ActionButton/ActionButton';

class App extends Component {

  state = {
    showCounter: true,
    showMessageDisplay: false
  }

  handleVisibilityFeatureChange = () => {
    this.setState({
      showCounter: !this.state.showCounter,
      showMessageDisplay: !this.state.showMessageDisplay
    });
  }

  render() {
   const { showCounter, showMessageDisplay } = this.state;

    return (
      <>
        {showCounter && <Counter />}
        {showMessageDisplay && <MessageDisplay />}

        <br></br>
        <br></br>

        <div className='feature-display'>
          <ActionButton click={this.handleVisibilityFeatureChange} title={this.state.showCounter ? 'Show list' : 'Show counter'} />
        </div>

      </>
    );
  }
}

export default App;
