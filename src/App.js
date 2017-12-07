import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    console.log('constructor');
    const websocketfun = ()=>{
    let socket =new WebSocket('ws://192.168.1.15:8181');
    socket.onopen = function(event) { 
        // 发送一个初始化消息
        socket.send('I am the client and I\'m listening!'); 
        // 监听消息
        socket.onmessage = function(event) { 
          console.log('Client received a message',event.data); 
        }; 
      };
        // 监听Socket的关闭
      socket.onclose = function(event) { 
        console.log('Client notified socket has closed',event); 
      }; 
    }
    websocketfun();
  // 关闭Socket.... 
  //socket.close() 
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
