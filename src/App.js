import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "TEST",
      auth: false,
      sidebarActive: false,
      skillButtonActive: false,
      STR: 12,
      DEX: 15,
      CON: 10,
      INT: 12,
      WIS: 9,
      CHA: 18,
      SkillAcrobatics: "+2",
      SkillAnimalHandling: "-1",
      SkillArcana: "+1",
      SkillAthletics: "+1",
      SkillDeception: "+4",
      SkillHistory: "+1",
      SkillInsight: "-1",
      SkillIntimidation: "+4",
      SkillInvestigation: "+1",
      SkillMedicine: "-1",
      SkillNature: "+1",
      SkillPerception: "-1",
      SkillPerformance: "+4",
      SkillPersuasion: "+4",
      SkillReligion: "+1",
      SkillSleightOfHand: "+2",
      SkillStealth: "+2",
      SkillSurvival: "-1"
    }
    this.displaySkills = this.displaySkills.bind(this);
  }
  roll() { // Basic 1d20 roll function.
    const mainContent = document.getElementsByClassName("main-content")[0];
    mainContent.innerHTML = "";
    const result = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    const displayedResult = document.createElement("h1");
    displayedResult.textContent = result;
    mainContent.appendChild(displayedResult);
  }
  displaySkills() { // Retrieves skill values from state and displays to main-content.
    const skillButton = document.getElementsByClassName("skill-button")[0];
    const mainContent = document.getElementsByClassName("main-content")[0];
    mainContent.innerHTML = "";
    if (!this.state.skillButtonActive) { // Check if skills are being displayed.
      const skillList = document.createElement("ul");
      mainContent.appendChild(skillList);
      for (let key in this.state) {
        const nextSkill = document.createElement("li");
        if (/^Skill/.test(key)) {
          let skill = key.replace(/^Skill/, "");
        if (/^[A-Z][a-z]+([A-Z])[a-z]+/.test(skill)) {  // Check for skills with multiple words.
          let doppelSkill = skill;
          skill = "";
          for (let i = 0; i < doppelSkill.length; i++) { // Add spaces between words.
            if (i !== 0 && /[A-Z]/.test(doppelSkill[i])) // Regex probably better option than loop.
              skill += ` ${doppelSkill[i]}`;
            else
              skill += doppelSkill[i];
          }
        }
          nextSkill.textContent = `${skill}: ${this.state[key]}`;
          if (/Perception/.test(skill)){ // Add Passive Perception to skill button.
            skillButton.innerHTML = "";
            const passivePerception = document.createElement("h4");
            passivePerception.textContent = `Passive ${skill}: ${this.state[key]}`;
            skillButton.appendChild(passivePerception);
            this.setState({skillButtonActive: true});
          }
          skillList.appendChild(nextSkill);
        }
      }
    } else { // If being displayed, return skill button to normal and reset main-content.
      mainContent.innerHTML = "";
      skillButton.innerHTML = "";
      const skillTitle = document.createElement("h2");
      skillTitle.textContent = "SKILLS";
      skillButton.appendChild(skillTitle);
      this.setState({skillButtonActive: false});
    }
  }
  render() {
    return (
      <div className="container">
        <Main />
        <SideBar />
        <AbilButton />
        <SkillButton displaySkills ={this.displaySkills}/>
        <InvButton />
        <RollButton roll={this.roll}/>
        <HistButton />
        <MiscButton />
        <Details />
      </div>
    );
  }
}
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-content">
        <h1>{"TEST"}</h1>
      </div>
    );
  }
}
class SideBar extends Component {
  constructor(props) {
    super(props);
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
        <div className="arrow"></div>
      </div>
    );
  }
}
class AbilButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav-buttons nav1">
        <h2>ABILITIES</h2>
      </div>
    );
  }
}
class SkillButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div onClick={this.props.displaySkills} className="nav-buttons skill-button">
        <h2>SKILLS</h2>
      </div>
    );
  }
}
class InvButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav-buttons nav3">
        <h2>INV</h2>
      </div>
    );
  }
}
class RollButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div onClick={this.props.roll} className="nav-buttons nav4">
        <h1>D20</h1>
      </div>
    );
  }
}
class HistButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav-buttons nav5">
        <h2>HIST</h2>
      </div>
    );
  }
}
class MiscButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav-buttons nav6">
        <h2>MISC</h2>
      </div>
    );
  }
}
class Details extends Component {
  constructor(props) {
    super(props);
  }
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