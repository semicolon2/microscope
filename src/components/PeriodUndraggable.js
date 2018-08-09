import React, { PureComponent } from "react";
import TextAreaAutosize from "react-autosize-textarea";

import Tone from "./Tone";
import EventList from "./EventList";

class Period extends PureComponent {
  handleUpdateText = e => {
    this.props.updatePeriod({ id: this.props.id, text: e.target.value });
  };

  handleUpdateTone = () => {
    this.props.updatePeriod({
      id: this.props.id,
      tone: this.props.tone === "dark" ? "light" : "dark"
    });
  };

  render() {
    return (
      <div
        className={`flex flex-col items-center ${
          this.props.id === "periodStart" ? "ml-auto" : "mr-auto"
        }`}
        style={{ minWidth: "12rem" }}
      >
        <div className="card-border w-32 h-48 trans shadow-md hover:shadow-lg">
          <span />
          <TextAreaAutosize
            className="text-center"
            value={this.props.text}
            style={{ resize: "none", height: "auto" }}
            maxRows={5}
            onChange={this.handleUpdateText}
          />
          <Tone
            tone={this.props.tone}
            classNames="inline m-auto mt-1 mb-1 cursor-pointer w-16 h-16"
            onClick={this.handleUpdateTone}
          />
        </div>
        <EventList periodId={this.props.id} eventIds={this.props.events} />
      </div>
    );
  }
}

export default Period;
