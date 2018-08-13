import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SideBar />
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

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      loggedIn: false
    }
    this.click = this.click.bind(this);
  }
  click() {
    const sideBar = document.getElementsByClassName("sideBar")[0];
    const loginForm = document.getElementsByClassName("loginForm")[0];
    const arrow = document.getElementsByClassName("arrow")[0];
    if (this.state.active === false) {
      loginForm.style.visibility = "visible";
      sideBar.style.width = "15%";
      arrow.style.transform = "translateX(13vw) rotate(135deg)";
      this.setState({
        active: true
      });
    } else {
      loginForm.style.visibility = "hidden";
      sideBar.style.width = "2%";
      arrow.style.transform = "rotate(-45deg)";
      this.setState({
        active: false
      });
    }
  }
  render() {
    return (
      <div className="sideBar">
        <h1>?</h1>
        <form className="loginForm">
          <h4>Welcome!  Login below:</h4>
          <input type="text" placeholder="Email" className="emailLogin"></input>
          <input type="password" placeholder="Password" className="passwordLogin"></input>
          <button type="submit" className="loginButton">Login</button>
        </form>
        <div onClick={this.click} className="arrow"></div>
      </div>
    );
  }
}
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <img class="portrait" src="https://i.imgur.com/iPyleTb.png" alt="portrait of [character name]"/>
    };
  }
  render() {
    return (
      <div className="main-content">
        {this.state.content}
      </div>
    );
  }
}
class Nav1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "ABILITY"
    }
    this.click = this.click.bind(this);
  }
  click() {
    if (this.state.display === "ABILITY"){
      delete this.state.display;
      this.setState({
        STR: 12,
        DEX: 15,
        CON: 10,
        INT: 12,
        WIS: 9,
        CHA: 18
      }, () => {
        const button = document.getElementsByClassName("nav1")[0];
        button.innerHTML = "";
        for (let key in this.state) {
          let splitDiv = document.createElement("div");
          let ability = document.createElement("b");
          let block = document.createElement("p");
          ability.textContent = key;
          let score = this.state[key];
          let modifier = Math.floor((score - 10) / 2);
          let sign = modifier >= 0 ? "+" : "";
          let spacer = score >= 10 ? " " : "  ";
          block.textContent = spacer + score + "\n(" + sign + modifier + ")";
          button.style.display = "grid";
          button.appendChild(splitDiv);
          splitDiv.appendChild(ability);
          splitDiv.appendChild(block);
        }
      });
    }
    else {
      this.setState({
        display: "ABILITY"
      }, () => {
      const button = document.getElementsByClassName("nav1")[0];
      button.innerHTML = "";
      let test = document.createElement("h2");
      test.textContent = this.state.display;
      button.appendChild(test);
      button.style.display = "flex";
      });
    }
  }
  render() {
    return (
      <div onClick={this.click} className="nav-buttons nav1">
        <h2>{this.state.display}</h2>
      </div>
    );
  }
}
class Nav2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "SKILL"
    }
    this.click = this.click.bind(this);
  }
  click() {
    const skillButton = document.getElementsByClassName("nav2")[0];
    if (this.state.display === "SKILL") {
      delete this.state.display;
      this.setState({
        Acrobatics: "+2",
        AnimalHandling: "-1",
        Arcana: "+1",
        Athletics: "+1",
        Deception: "+4",
        History: "+1",
        Insight: "-1",
        Intimidation: "+4",
        Investigation: "+1",
        Medicine: "-1",
        Nature: "+1",
        Perception: "-1",
        Performance: "+4",
        Persuasion: "+4",
        Religion: "+1",
        SleightOfHand: "+2",
        Stealth: "+2",
        Survival: "-1"
      }, () => {
        skillButton.innerHTML = "";
        for (let key in this.state) {
          if (key === "Perception"){
            let ppTitle = document.createElement("h4");
            ppTitle.textContent = `Passive ${key}:\n${this.state[key]}`;
            skillButton.appendChild(ppTitle);
          } else {
            console.log(`${key}: ${this.state[key]}`);
          }
        }
      });
    } else {
      let skillTitle = document.createElement("h2");
      this.setState({display: "SKILL"}, () => {
        skillButton.innerHTML = "";
        skillTitle.textContent = this.state.display;
        skillButton.appendChild(skillTitle);
        
      });
    }
  }
  render() {
    return (
      <div onClick={this.click} className="nav-buttons nav2">
        <h2>{this.state.display}</h2>
      </div>
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
      <div className="nav-buttons nav3">
        <h2>{this.state.display}</h2>
      </div>
    );
  }
}
class Nav4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "PORTRAIT",
      content: <img class="portrait" src="https://i.imgur.com/iPyleTb.png" alt="portrait of [character name]"/>
    }
  }
  render() {
    return (
      <div className="nav-buttons nav4">
        <h2>{this.state.display}</h2>
      </div>
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
      <div className="nav-buttons nav5">
        <h2>{this.state.display}</h2>
      </div>
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
      <div className="nav-buttons nav6">
        <h2>{this.state.display}</h2>
      </div>
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