import React from "react";
import axios from "axios";
import DanceEventInfo from "../Resource/DanceEventInfo";
import SingleEvent from "./SingleEvent";
import MyMap from "./MyMap";
import "./EventGallery.css";
class EventGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      dateValue: "",
      allDanceEvents: DanceEventInfo,
      showAllEvents: true
    };
  }

  componentDidMount() {
    axios.get("https://dancer-network.herokuapp.com/events").then(res => {
      this.setState({
        allDanceEvents: res.body
      });
    });
  }

   handleChange =(event) => {
     this.setState({
       nameValue: event.target.value
     });
   }

   dateChange =(event) => {
     this.setState({
       dateValue: event.target.value
     });
   }

   render() {
     const filteredName =
       this.state.allDanceEvents.filter((perEvent) => perEvent.eventName.toLowerCase().startsWith(this.state.nameValue.toLowerCase())
       );
     const filteredDate =
       this.state.allDanceEvents.filter((perEvent) => perEvent.date.startsWith(this.state.dateValue)
       );
     const isNameValueNull = this.state.nameValue === "";
     const isDateValueNull = this.state.dateValue === "";
     return (
       <div className="whole-gallery">
         <MyMap/>
         <div className="galleryandbox">
           <div className="search-box-container">
             <h2>Find your events here!</h2>
             <input placeholder="Search by Name" className="searchbox" type="text" value={this.state.nameValue} onChange={this.handleChange} />
             <input placeholder="Search by Date (e.g. DDMMYYYY)" className="searchbox" type="text" value={this.state.dateValue} onChange={this.dateChange} />
             <h3>Currently {this.state.allDanceEvents.length} events around the world!</h3>
           </div>
           <div className='eventgallery'>
             {this.state.dateValue !== "" &&
          filteredDate.map(oneEvent => { return <SingleEvent key={oneEvent.id} danceEvent={oneEvent} />; })
             }
             {this.state.nameValue !== "" &&
          filteredName.map(oneEvent => { return <SingleEvent key={oneEvent.id} danceEvent={oneEvent} />; })
             }
             { isNameValueNull && isDateValueNull &&
          filteredName.map(oneEvent => { return <SingleEvent key={oneEvent.id} danceEvent={oneEvent} />; })
             }
           </div>
         </div>
       </div>
     );
   }
}
export default EventGallery;
