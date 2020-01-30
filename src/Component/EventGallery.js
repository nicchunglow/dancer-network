/* eslint-disable no-undef */
import React from "react";
import DanceEventInfo from "../Resource/DanceEventInfo";
import SingleEvent from "./SingleEvent";
import MyMap from "./MyMap";
class EventGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DanceEventList: [DanceEventInfo],
    };
  }

  render() {
    return (
      <div className="eventgallery">
        <div>
          {DanceEventInfo.map(oneEvent => {
            return <SingleEvent key={oneEvent.id} danceEvent={oneEvent} />;
          })}
        </div>
        <MyMap/>
      </div>
    );
  }
}

export default EventGallery;
