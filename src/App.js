import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "TEST",
      auth: false,
      sidebarActive: false,
      sidebarWidth: "2%",
      abilityButtonActive: false,
      abilityButtonTitle: "ABILITIES",
      abilityButtonStyle: {
        display: "flex"
      },
      abilityScores: {
        STR: 6,
        DEX: 12,
        CON: 12,
        INT: 12,
        WIS: 12,
        CHA: 12
      },
      skillButtonActive: false,
      skillButtonTitle: "SKILLS",
      skillButtonStyle: {
        fontSize: "1em"
      },
      SKI_Acrobatics: "+2",
      SKI_AnimalHandling: "-1",
      SKI_Arcana: "+1",
      SKI_Athletics: "+1",
      SKI_Deception: "+4",
      SKI_History: "+1",
      SKI_Insight: "-1",
      SKI_Intimidation: "+4",
      SKI_Investigation: "+1",
      SKI_Medicine: "-1",
      SKI_Nature: "+1",
      SKI_Perception: "-1",
      SKI_Performance: "+4",
      SKI_Persuasion: "+4",
      SKI_Religion: "+1",
      SKI_SleightOfHand: "+2",
      SKI_Stealth: "+2",
      SKI_Survival: "-1"
    }
    this.expandSidebar = this.expandSidebar.bind(this);
    this.displayAbility = this.displayAbility.bind(this);
    this.roll = this.roll.bind(this);
    this.displaySkills = this.displaySkills.bind(this);
  }

  expandSidebar() {
    if (this.state.sidebarActive)
      this.setState({sidebarWidth: "2%", sidebarActive: false});
    else
      this.setState({sidebarWidth: "15%", sidebarActive: true});
  }

  displayAbility() {
    if (this.state.abilityButtonActive) {
      this.setState({ abilityButtonActive: false });
    }
    else {
      this.setState({ abilityButtonActive: true }); 
    } 
  }

  roll() { // Basic 1d20 roll function.
    const main = document.getElementsByClassName("main-content")[0];
    main.style.fontSize = "1em";
    this.setState({
      display: Math.floor(Math.random() * (20 - 1 + 1) + 1),
      skillButtonActive: false,
      skillButtonTitle: "SKILLS",
      skillButtonStyle: {
        fontSize: "1em"
      }
    });
  }

  displaySkills() { // Retrieves skill values from state and displays to main-content.
    const main = document.getElementsByClassName("main-content")[0];
    const skillArr = [];
    if (!this.state.skillButtonActive) { // Check if skills are being displayed.
      for (let key in this.state) {
        if (/^SKI_/.test(key)) {
          let skill = key.replace(/^SKI_/, "");
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
          skillArr.push(`${skill}: ${this.state[key]}`)
          if (/Perception/.test(skill)){ // Add Passive Perception to skill button.
            this.setState({
              skillButtonActive: true,
              skillButtonTitle: `Passive ${skill}:\n${Number(this.state[key]) + 10}`,
              skillButtonStyle: {
                fontSize: "0.6em",
                textAlign: "center"
              }
            });
          }
        }
      }
      main.style.fontSize = ".12em";
      this.setState({display: skillArr.join("\n")})
    } else { // If being displayed, return skill button to normal and reset main-content.
      main.style.fontSize = "1em";
      this.setState({
        skillButtonActive: false,
        skillButtonTitle: "SKILLS",
        skillButtonStyle: {
          fontSize: "1em"
        },
        display: "TEST"
      });
    }
  }

  render() {
    return (
      <div className="container">

        <Main display={this.state.display} />

        <SideBar sidebarWidth={this.state.sidebarWidth} 
          expandSidebar={this.expandSidebar} />

        <AbilButton style={this.state.abilityButtonStyle}
          active={this.state.abilityButtonActive}
          scores={this.state.abilityScores}
          title={this.state.abilityButtonTitle}
          click={this.displayAbility} />

        <SkillButton style={this.state.skillButtonStyle} 
          title={this.state.skillButtonTitle} 
          click ={this.displaySkills} />

        <InvButton />

        <RollButton roll={this.roll} />

        <HistButton />

        <MiscButton />

        <Details />

      </div>
    );
  }
}

const Main = (props) => {
    return (
      <div className="main-content">
        <h1>{props.display}</h1>
      </div>
    );
  }

const SideBar = (props) => {
    return (
      <div style={{width: props.sidebarWidth}} className="sideBar">
        <h1>?</h1>
        <form className="loginForm">
          <h4>Welcome!  Login below:</h4>
          <input type="text" placeholder="Email" className="emailLogin"></input>
          <input type="password" placeholder="Password" className="passwordLogin"></input>
          <button type="submit" className="loginButton">Login</button>
        </form>
        <div className="arrow" onClick={props.expandSidebar}></div>
      </div>
    );
  }

const AbilButton = (props) => {
  const strMod = props.scores.STR >= 10 ? `+${Math.floor((props.scores.STR - 10) / 2)}` 
  : Math.floor((props.scores.STR - 10) / 2);
  const dexMod = props.scores.DEX >= 10 ? `+${Math.floor((props.scores.DEX - 10) / 2)}` 
  : Math.floor((props.scores.DEX - 10) / 2);
  const conMod = props.scores.CON >= 10 ? `+${Math.floor((props.scores.CON - 10) / 2)}` 
  : Math.floor((props.scores.CON - 10) / 2);
  const intMod = props.scores.INT >= 10 ? `+${Math.floor((props.scores.INT - 10) / 2)}` 
  : Math.floor((props.scores.INT - 10) / 2);
  const wisMod = props.scores.WIS >= 10 ? `+${Math.floor((props.scores.WIS - 10) / 2)}` 
  : Math.floor((props.scores.WIS - 10) / 2);
  const chaMod = props.scores.CHA >= 10 ? `+${Math.floor((props.scores.CHA - 10) / 2)}` 
  : Math.floor((props.scores.CHA - 10) / 2);

  if (!props.active) {
    return (
      <div onClick={props.click}
      className="nav-buttons ability-button">
        <h2>{props.title}</h2>
      </div>
    );
  } else {
    return (
    <div onClick={props.click}
    className="ability-container nav-buttons ability-button">
      <div>
        <h4>STR</h4>
        <p>{props.scores.STR}</p>
        <p>{strMod}</p>
      </div>
      <div>
        <h4>DEX</h4>
        <p>{props.scores.DEX}</p>
        <p>{dexMod}</p>
      </div>
      <div>
        <h4>CON</h4>
        <p>{props.scores.CON}</p>
        <p>{conMod}</p>
      </div>
      <div>
        <h4>INT</h4>
        <p>{props.scores.DEX}</p>
        <p>{intMod}</p>
      </div>
      <div>
        <h4>WIS</h4>
        <p>{props.scores.WIS}</p>
        <p>{wisMod}</p>
      </div>
      <div>
        <h4>CHA</h4>
        <p>{props.scores.DEX}</p>
        <p>{chaMod}</p>
      </div>
    </div>
    );
  }
}

const SkillButton = (props) => {
    return (
      <div style={props.style} 
      onClick={props.click} 
      className="nav-buttons skill-button">
        <h2>{props.title}</h2>
      </div>
    );
  }

const InvButton = () => {
    return (
      <div className="nav-buttons nav3">
        <h2>INV</h2>
      </div>
    );
  }

const RollButton = (props) => {
        return (
      <div onClick={props.roll} className="nav-buttons roll-button">
        <h1>D20</h1>
      </div>
    );
  }

const HistButton = (props) => {
    return (
      <div className="nav-buttons nav5">
        <h2>HIST</h2>
      </div>
    );
  }

const MiscButton = (props) => {
    return (
      <div className="nav-buttons nav6">
        <h2>MISC</h2>
      </div>
    );
  }

const Details = (props) => {
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

export default App;