import React from "react";

const Card = props => {
  return (
    <div style={{ height: 270, paddingRight: 30, float: "left" }}>
      <div className="card">
        <div className="card-image" style={{ width: 240 }}>
          <img
            alt={props.payload.header.stringValue}
            src={props.payload.image.stringValue}
          />
          <span className="card-title">{props.payload.header.stringValue}</span>
        </div>
        <div className="card-content">
          {props.payload.description.stringValue}
          <p>
            {" "}
            <a href="/">{props.payload.price.stringValue}</a>
          </p>
        </div>
        <div className="card-action">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.payload.link}
          >
            GET NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
