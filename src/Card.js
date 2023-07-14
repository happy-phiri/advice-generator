import React from "react";

const Card = (props) => {
  return (
    <div className="">
      {props.advice ? (
        <div className="card">
          <p className="top-text">
            Advice #<span>{props.advice.id}</span>
          </p>

          <p className="advice-text">"{props.advice.advice}"</p>

          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="./images/pattern-divider-desktop.svg"
            />
            <img
              src="./images/pattern-divider-mobile.svg"
              alt="pattern divider"
            />
          </picture>

          <button className="btn" onClick={() => props.generateNewAdvice()}>
            <img src="./images/icon-dice.svg" alt="icon dice" />
          </button>
        </div>
      ) : (
        <div className="card loading-card">
          <img src="./images/Spinner.gif" alt="loading gif" />
        </div>
      )}
    </div>
  );
};

export default Card;
