import React from "react";
import CountUp from "react-countup";
import { Wrapper } from "../assets/wrapper/CounterStyles";

const Counter = () => {
  return (
    <Wrapper>
      <div className="counter">
        <div className="container px-4 sm:px-8">
          <div id="counter">
            <div className="cell">
              <div className="counter-value number-count">
                <CountUp end={231} enableScrollSpy />
              </div>
              <p className="counter-info">Happy Users</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count">
                <CountUp end={385} enableScrollSpy />
              </div>
              <p className="counter-info">Issues Solved</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count">
                <CountUp end={159} enableScrollSpy />
              </div>
              <p className="counter-info">Good Reviews</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count">
                <CountUp end={127} enableScrollSpy />
              </div>
              <p className="counter-info">Case Studies</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count">
                <CountUp end={211} enableScrollSpy />
              </div>
              <p className="counter-info">Orders Received</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Counter;
