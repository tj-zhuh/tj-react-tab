import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Tab, { TabItem } from '../src/index.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedIndex : 0
    };
  }

  render() {
    return (
      <div>
        <Tab
          selectedIndex={this.state.selectedIndex}
          onChange={this.onTabChange.bind(this)}
        >
          <TabItem header="tab 1">
            <div>tab1的内容</div>
          </TabItem>
          <TabItem header="tab 2">
            <div>tab2的内容</div>
          </TabItem>
          <TabItem header="tab 3">
            <div>tab3的内容</div>
          </TabItem>
        </Tab>
      </div>
    );
  }

  onTabChange(index) {
    this.setState({ selectedIndex: index });
  }
}

ReactDOM.render(<App />, document.getElementById('root')); 