/* import React from 'react'
const QuichSelect = ({onclick,changetomin,teaList}) => {
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
    return (
        

        <div>
            {{teaList}.map((tea, index) => (
      <li
        data-name={tea.name}
        data-time={tea.time}
        key={index}
        onClick={onclick}
        className="tea-box"
      >
        <span className="name">{tea.name}</span>
        <p className="temp">{tea.temp}°C</p>
        <p className="time">{changetomin(tea.time)}min</p>
        <span className="note">
          Brew with {tea.temp}°C water for {tea.time}s.
        </span>
      </li>
            ))}
        </div>
    )
}

export default QuichSelect */
import React from 'react'

 class QuichSelect extends React.Component {
    constructor(props) {
        super(props);
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
      
    render() {
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
        return (
            <div>
            {this.teaList.map((tea, index) => (
      <li
        data-name={tea.name}
        data-time={tea.time}
        key={index}
        onClick={()=>this.props.ActivateTea}
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
        </div>
        )
    }
}
export default QuichSelect
 

  /*   var quickSelect = this.teaList.map((tea, index) => (
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
    ));
  */