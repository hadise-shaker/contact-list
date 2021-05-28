import React from "react";
import "./App.css";
/* import QuichSelect from "./components/QuichSelect"; */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teaname: "",
      teatime: 0,
      timerActive: false,
      timer: null,
    };
    this.ActivateTea = this.ActivateTea.bind(this);
    this.tick = this.tick.bind(this);
    this.cancelTimer = this.cancelTimer.bind(this);
  }
  teaList = [
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
  tick(e) {
    var time = e.target.dataset.time;
    console.log("started");
    var count = 0;
    var self = this;
    self.setState({
      timerActive: true,
    });

    this.state.timer = setInterval(() => {
      console.log(time);
      if (count++ >= time) {
        clearInterval(self.state.timer);
        alert("Tea is ready!");
      } else {
        var Left = time - count;
        self.setState({
          teatime: Left,
        });
      }
    }, 1000);
  }

  ActivateTea(e) {
    console.log("activet");
    var tea = e.target.dataset.name;
    var time = e.target.dataset.time;

    this.setState({ teaname: tea, teatime: time });
    console.log(this.state.teatime);
  }

  cancelTimer() {
    clearInterval(this.state.timer);
    this.setState({
      teatime: 0,
    });
  }
  render() {
    /* get seconds & change to minute */
    function changeToMin(seconds) {
      var secs = Math.round(seconds);

      var minute = secs % (60 * 60);
      var minutes = Math.floor(minute / 60);

      var second = minute % 60;
      var seconds = Math.ceil(second);
      if (seconds.toString().length <= 1) {
        seconds = +"0" + seconds;
      }
      var time = {
        m: minutes,
        s: seconds,
      };
      return time.m + "." + time.s;
    }
    /* **************************** ************************************** */
    if (this.state.teatime > 0) {
      var Left = " min left";
    }
    var cancletime;
    if (this.state.timerActive) {
      cancletime = (
        <a onClick={this.cancelTimer} className="btn-cancel">
          Cancel
        </a>
      );
    } else {
      cancletime = "";
    }

    return (
      <div className="App">
        <section className="tea">
          <div className="container">
            <p className="title">{this.state.teaname}</p>
            <h4 className="output">
              {changeToMin(this.state.teatime)}
              {Left}
            </h4>
            <ul className="list">
              {this.teaList.map((tea, index) => (
                <li
                  data-name={tea.name}
                  data-time={tea.time}
                  key={index}
                  onClick={this.ActivateTea}
                  className="tea-box"
                >
                  <span className="name">{tea.name}</span>
                  <p className="temp">{tea.temp}°C</p>
                  <p className="time">{changeToMin(tea.time)}min</p>
                  <span className="note">
                    Brew with {tea.temp}°C water for {tea.time}s.
                  </span>
                </li>
              ))}
            </ul>
            <a
              className="btn"
              data-time={this.state.teatime}
              data-name={this.state.teaname}
              onClick={this.tick}
            >
              Start Timer
            </a>
            {cancletime}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
