import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponents';
import React from 'react';

class App extends React.Component {
  state = {
    name: "AnhVP",
    address: "HN",
    age: 25
  }
handleClick(event){
  console.log(event)
  console.log("random "+Math.random(),this.state.name)

  this.setState({
    name: "Vũ Phúc Anh",
    age: Math.random() +1
  })

}

handleOnMouseOver(event){
  console.log(event)
}
  render() {
    return (
      <div>
        My name is {this.state.name} and from {this.state.address}
       <br></br> I'm {this.state.age}
        <button onClick={(event)=>this.handleClick(event)}>Click me!</button>
      </div>
    )
  }
}

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//     Hello world
//     <MyComponent/>
//     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <div>Count = {count}</div>
//     //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//     //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//     //   </header>
//     // </div>
//   );
// }



export default App;
