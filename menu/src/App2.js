/* import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const defaultTeas = [
    {
      name: "Black Tea",
      time: 180,
      temp: 100,
    },
    {
      name: "Green Tea",
      time: 120,
      temp: 80,
    },
    {
      name: "White Tea",
      time: 120,
      temp: 75,
    },
  ];
  const [teatimer, setTea] = useState("");
  const starttimer = () => {
    console.log("started");
    
  };
  return (
    <div className="App">
      <p>show timer</p>
      <h1>{teatimer}min left</h1>
      <br></br>
      <br></br>
      <br></br>
      {defaultTeas.map((tea, index) => {
        return (
          <li
            data-name={tea.name}
            data-time={tea.time}
            key={index}
             onClick={this.setActiveTea}
            className="tea-box"
          >
            <span
              className="name"
              onClick={(e) => setTea(tea.time / 60 + ":00")}
            >
              {tea.name}
            </span>
            <p className="temp">{tea.temp}°C</p>
            <p className="time">{tea.time}min</p>
            <span className="note">
              Brew with {tea.temp}°C water for {tea.time}s.
            </span>
          </li>
        );
      })}
      <h2 onClick={starttimer}>start timer</h2>
    </div>
  );
}
export default App;
 */

import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*  word: 0, */
      /* second: 0, */
      teaname: "",
      teatime: 0,
      timerActive: false,
    };
    /*    this.starttimer = this.starttimer.bind(this); */
    this.setActiveTea = this.setActiveTea.bind(this);
    /*     this.tick = this.tick.bind(this); */
    /* this.tea = this.tea.bind(this); */
  }
  Time = (function (window, document, undefined) {
    function _toMinutes(seconds) {
      // taken from
      // http://stackoverflow.com/a/6312999/2777153
      var secs = Math.round(seconds);

      var minuteDivisor = secs % (60 * 60);
      var minutes = Math.floor(minuteDivisor / 60);

      var secondDivisor = minuteDivisor % 60;
      var seconds = Math.ceil(secondDivisor);
      if (seconds.toString().length <= 1) {
        seconds = +"0" + seconds;
      }
      var time = {
        m: minutes,
        s: seconds,
      };
      return time.m + "." + time.s;
    }

    return {
      toMinutes: _toMinutes,
    };
  })(window, document);
  tick() {
    this.setState({
      teatime: this.state.teatime < 60 ? this.state.teatime - 1 : 0,
    });
  }
  /*   starttimer() {
    console.log("started");
    this.interval = setInterval(() => this.tick(), 1000);
  } */
  startTimer(event) {
    var time = event.target.time;
    /* var self = this; */
    var count = 0;
    console.log(time);

    this.setState({
      timerActive: true,
    });

    this.state.teatime = setInterval(function () {
      if (count++ >= time) {
        clearInterval(this.props.teatime);
        alert("Tea is ready!");
      } else {
        var timeLeft = time - count;
        this.setState({
          teatime: timeLeft,
        });
      }
    }, 1000);
  }
  defaultTeas = [
    {
      name: "Black Tea",
      time: 180,
      temp: 100,
    },
    {
      name: "Green Tea",
      time: 120,
      temp: 80,
    },
    {
      name: "White Tea",
      time: 120,
      temp: 75,
    },
  ];
  settime() {
    console.log("hi");
  }
  setActiveTea(tea) {
    /*     var tea = event.target.name;
    var time = event.target.time; */

    this.setState({ teatime: tea });
    console.log(this.state.teatime);
  }
  /*   start() {
    this.interval = setInterval(() => this.tick(), 1000);
  } */
  render() {
    return (
      <div className="App">
        <p>show timer</p>
        <h1>{this.state.teatime}min left</h1>
        <br></br>
        <br></br>
        <br></br>
        {this.defaultTeas.map((tea, index) => {
          /*           this.setState({ teaname: tea.name });
          console.log(this.state.teaname); */
          return (
            <li
              data-name={tea.name}
              data-time={tea.time}
              key={index}
              /*  onClick={this.setActiveTea} */
              className="tea-box"
            >
              <span
                className="name"
                /* onClick={this.setState({ tea.name })} */
                onClick={() => this.setActiveTea(tea.time)}
              >
                {tea.name}
                {/*  {console.log(this.state.teaname)} */}
              </span>
              <p className="temp">{tea.temp}°C</p>
              <p className="time">{tea.time}min</p>
              <span className="note">
                Brew with {tea.temp}°C water for {tea.time}s.
              </span>
            </li>
          );
        })}
        <h2 onClick={this.startTimer.bind(this)}>start timer</h2>
      </div>
    );
  }
}

export default App;
