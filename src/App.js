import React from 'react';
import './App.css';

class App extends React.Component{
 constructor(props){
   super(props);
   this.state={date:new Date()};
 }
 tick=()=>{
   this.setState({date:new Date()});
 };
 componentDidMount(){
   this.timerId=setInterval(
       ()=>this.tick(),2000)
 }
componentWillUnmount(){
   clearInterval(this.tick());
}
render(){
  return(
      <div>
        <h1>Hello, world</h1>
        <h2>it is{this.state.date.toLocaleTimeString()}.</h2>
      </div>
  )
}
}
export default App;
//<h2>It is {new Date().toLocaleTimeString()}.</h2>