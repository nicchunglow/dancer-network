/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React from "react";
import "./SingleEvent.css"

const SingleEvent = () => {
  return (
    <div className="card">
      <img alt="name" src={process.env.PUBLIC_URL + `/EventPicture.jpg`}/>
      <h2>Event Title</h2>
      <h3>Style : Street Dance</h3>
      <h3>Date</h3>
      <p className="description">Desc:
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <button className='button'>Register</button>
      <div>Attendees</div>
      <div>Location</div>
      <div>Other events in the same month</div>
    </div>
  );
};

export default SingleEvent;
