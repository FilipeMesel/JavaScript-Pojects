import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }
  addToInput = val => {
    if(val === "sin") val = "sin(";
    if(val === "cos") val = "cos(";
    if(val === "tan") val = "tan(";
    if(val === "EXP") val = "^10";
    if(val === "SQRT") val = "sqrt(";
    if(val === "log") {val = "log(" + this.state.input + ",10)";this.setState({ input: val});}
    else {
      this.setState({ input: this.state.input + val});
    }
  };
  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };
  render() {
    return (
      <div className="app">
        <div className='calc-wrapper'>
          <Input input = {this.state.input}/>
          <div className='row'>
            <Button handleClick = {this.addToInput}>EXP</Button>
            <Button handleClick = {this.addToInput}>sin</Button>
            <Button handleClick = {this.addToInput}>(</Button>
            <Button handleClick = {this.addToInput}>)</Button>
            <Button handleClick = {this.addToInput}>%</Button>
          </div>
          <div className='row'>
            <Button handleClick = {this.addToInput}>cos</Button>
            <Button handleClick = {this.addToInput}>pi</Button>
            <Button handleClick = {this.addToInput}>7</Button>
            <Button handleClick = {this.addToInput}>8</Button>
            <Button handleClick = {this.addToInput}>9</Button>
            <Button handleClick = {this.addToInput}>/</Button>
          </div>
          <div className='row'>
            <Button handleClick = {this.addToInput}>tan</Button>
            <Button handleClick = {this.addToInput}>e</Button>
            <Button handleClick = {this.addToInput}>4</Button>
            <Button handleClick = {this.addToInput}>5</Button>
            <Button handleClick = {this.addToInput}>6</Button>
            <Button handleClick = {this.addToInput}>*</Button>
          </div>
          <div className='row'>
            <Button handleClick = {this.addToInput}>SQRT</Button>
            <Button handleClick = {this.addToInput}>^</Button>
            <Button handleClick = {this.addToInput}>1</Button>
            <Button handleClick = {this.addToInput}>2</Button>
            <Button handleClick = {this.addToInput}>3</Button>
            <Button handleClick = {this.addToInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick = {this.addToInput}>log</Button>
            <Button handleClick = {this.addToInput}>!</Button>
            <Button handleClick = {this.addToInput}>.</Button>
            <Button handleClick = {this.addToInput}>0</Button>
            <Button handleClick = {()=> this.handleEqual()}>=</Button>
            <Button handleClick = {this.addToInput}>-</Button>
          </div>
          <div className='row'>
          </div>
          <div className='row'>
            <ClearButton handleClear = {() => this.setState({input: ""})}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
