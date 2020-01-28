/* eslint-disable no-undef */
import React from "react";
import DanceEventInfo from "../Resource/DanceEventInfo";
import SingleEvent from "./SingleEvent";
class EventGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DanceEventList: [DanceEventInfo],
    };
  }

  // eslint-disable-next-line react/require-render-return
  render() {
    return (
      <div>
        {DanceEventInfo.map(oneEvent => {
          return <SingleEvent
            className="eventgallery"
            key={oneEvent.id} danceEvent = {oneEvent}/>;
        },
        )}
      </div>
    );
  }
}

export default EventGallery
;
