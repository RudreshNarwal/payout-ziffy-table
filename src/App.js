import React, { Component } from 'react';
import './App.css';
import Table from './components/table';
import Test from './components/test'
import "antd/dist/antd.css"
class App extends Component {
  render() {
    return (
      <div className="App">
       <h3 style={{ color: '#34495e', margin: '30px 0px 0px 30px'}}>Payout Process</h3>
        {/* adding cards */}  
        <Test/>
        
        {/* Importing virtual table  */}  
        <Table/>
      </div>
    );
  }
}

export default App;
