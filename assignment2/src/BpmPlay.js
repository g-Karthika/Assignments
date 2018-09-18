import React from 'react';
import './Metronome.css';
import Pen_Clicks from './Pen_Clicks.wav'
//import Pen_clicks from './Pen_clicks.wav'

class BpmPlay extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        };    

        this.Pen_Clicks = new Audio(Pen_Clicks);
      //  this.Pen_clicks = new Audio(Pen_clicks);

        
    }

    playClick = () => {
        const { count, beatsPerMeasure } = this.state;
      
       
        if(count % beatsPerMeasure === 0) {
          this.Pen_Clicks.play();
        } else {
          this.Pen_Clicks.play();
        }
      
       
        this.setState(state => ({
          count: (state.count + 1) % state.beatsPerMeasure
        }));
      }

    StartStop = () => {
        console.log("Clicked!")
        if(this.state.playing) {
           
            clearInterval(this.timer);
            this.setState({
              playing: false
            });
          } else {
            
            this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
            this.setState({
              count: 0,
              playing: true
              
            }, this.playClick);
          }
    }
    
    handleBpmChange = event => {
        const bpm = event.target.value;
       if(this.state.playing) {
    
    clearInterval(this.timer);
    this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

    
    this.setState({
      count: 0,
      bpm
    });
  } else {
   
    this.setState({ bpm });
  }
      }

     
        render() {
         /*  let bpm = 100;
          let playing = false; */

          const{playing, bpm} = this.state;
      
          return (
            <div className="metronome">
              <div className="bpm-slider">
              <div>{bpm} BPM</div>
                <input
                  type="range"
                  min="60"
                  max="240"
                  value={bpm} 
                  onChange = {this.handleBpmChange}/>
              </div>
              <button onClick={this.StartStop}>
                {playing ? 'Stop' : 'Start'}
              </button>
            </div>
          );
        }
      }
      
 
export default BpmPlay;