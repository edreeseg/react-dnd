import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Main />
        <Nav1 />
        <Nav2 />
        <Nav3 />
        <Nav4 />
        <Nav5 />
        <Nav6 />
        <Details />
      </div>
    );
  }
}
class Main extends Component {
  render() {
    return (
      <div className="main-content">
        <img class="portrait" src="https://i.imgur.com/iPyleTb.png" alt="portrait of [character name]"/>
      </div>
    );
  }
}
class Nav1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "CHAR"
    }
  }
  render() {
    return (
      <button onClick={this.click} className="nav-buttons nav1">
        <h1>{this.state.display}</h1>
      </button>
    );
  }
}
class Nav2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "SKILL"
    }
  }
  render() {
    return (
      <button className="nav-buttons nav2">
        <h1>{this.state.display}</h1>
      </button>
    );
  }
}
class Nav3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "INV"
    }
  }
  render() {
    return (
      <button className="nav-buttons nav3">
        <h1>{this.state.display}</h1>
      </button>
    );
  }
}
class Nav4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "ABIL"
    }
  }
  render() {
    return (
      <button className="nav-buttons nav4">
        <h1>{this.state.display}</h1>
      </button>
    );
  }
}
class Nav5 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "HIST"
    }
  }
  render() {
    return (
      <button className="nav-buttons nav5">
        <h1>{this.state.display}</h1>
      </button>
    );
  }
}
class Nav6 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "MISC"
    }
  }
  render() {
    return (
      <button className="nav-buttons nav6">
        <h1>{this.state.display}</h1>
      </button>
    );
  }
}
class Details extends Component {
  render() {
    return (
      <div className="details">
      <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis at ante accumsan consequat. Vivamus aliquam rhoncus libero. Integer porta bibendum elit, vitae iaculis est maximus eget. Aliquam erat volutpat. Nullam in massa quis massa dapibus rutrum in vestibulum metus. Donec scelerisque, lacus nec ornare tincidunt, mauris turpis mollis eros, vel ornare libero tellus eget sapien. Aliquam bibendum volutpat arcu, ac porttitor odio commodo sed. Pellentesque dictum non nulla a efficitur. Maecenas mollis interdum consectetur. Praesent iaculis porttitor magna quis blandit. Vivamus suscipit gravida diam, et placerat lorem pellentesque id. Nullam in gravida enim.</p>
        <br />
        <p>Etiam tincidunt ac purus nec condimentum. Aenean gravida gravida ligula ut facilisis. Ut vitae vehicula ipsum. Nunc et sem sit amet urna sagittis semper. Suspendisse in scelerisque erat. Nulla facilisi. Mauris congue, lacus eu pulvinar interdum, diam dui euismod nisi, venenatis volutpat sem diam eu arcu. Ut hendrerit ipsum a velit iaculis, nec iaculis ipsum mattis. Proin ornare turpis tellus, eleifend ullamcorper sem feugiat quis. Nullam auctor, odio sed maximus ullamcorper, risus augue tempus eros, nec tempus purus mauris eu metus. Proin lacinia ullamcorper orci. Nullam purus neque, molestie vel eros sit amet, aliquam viverra sapien. In venenatis ante orci, eget imperdiet tellus imperdiet id. Proin diam mauris, gravida a vehicula quis, accumsan vitae metus. Praesent sit amet neque malesuada, faucibus mauris nec, molestie urna.</p>
        <br />
        <p>Ut ullamcorper felis nec mi ultrices feugiat eu sit amet tortor. In ut sagittis lorem. Praesent eget egestas quam. Nunc iaculis sodales vestibulum. Mauris feugiat purus ac ultricies posuere. Nullam risus nisi, fringilla vel risus auctor, sollicitudin sollicitudin lacus. Nunc condimentum tincidunt dui vitae malesuada. Sed non odio lacus. Suspendisse eget dolor risus.</p>
      </div>
    );
  }
}
export default App;