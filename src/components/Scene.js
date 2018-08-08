import React, { PureComponent } from "react";
import Collapsible from "react-collapsible";
import { Draggable } from "react-beautiful-dnd";
import TextAreaAutosize from "react-autosize-textarea";

import Tone from "./Tone";
import OpenCard from "./OpenCard";

class Scene extends PureComponent {
  handleOpen = () => {
    this.props.updateScene({
      id: this.props.id,
      open: this.props.open === false ? true : false
    });
  };

  handleUpdateTone = () => {
    this.props.updateScene({
      id: this.props.id,
      tone: this.props.tone === "dark" ? "light" : "dark"
    });
  };

  handleUpdateQuestion = e => {
    this.props.updateScene({
      id: this.props.id,
      question: e.target.value
    });
  };

  handleUpdateText = e => {
    this.props.updateScene({
      id: this.props.id,
      text: e.target.value
    });
  };

  handleUpdateAnswer = e => {
    this.props.updateScene({
      id: this.props.id,
      answer: e.target.value
    });
  };

  render() {
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div {...provided.draggableProps} ref={provided.innerRef}>
            <div
              className={`border border-t-0 rounded-t-none border-grey-darker w-48 h-auto rounded text-center bg-white trans shadow-md hover:shadow-lg ${
                snapshot.isDragging || this.props.eventIsDragging
                  ? "shadow-lg"
                  : ""
              }`}
            >
              <span className="drag-handle" {...provided.dragHandleProps} />
              <div className="flex flex-row items-center mt-1 mb-1">
                <OpenCard onClick={this.handleOpen} open={this.props.open} />
                <TextAreaAutosize
                  className="text-center"
                  style={{ resize: "none" }}
                  maxRows={4}
                  value={this.props.question}
                  onChange={this.handleUpdateQuestion}
                />
                <Tone
                  classNames="inline m-auto mr-1 cursor-pointer w-6 h-6"
                  tone={this.props.tone}
                  onClick={this.handleUpdateTone}
                />
              </div>
              <div>
                <Collapsible
                  trigger=""
                  transitionTime={200}
                  open={this.props.open}
                >
                  <div className="p-1 m-auto text-center">
                    <TextAreaAutosize
                      className="border-grey-darkest border-t"
                      style={{ resize: "none" }}
                      rows={2}
                      maxRows={6}
                      value={this.props.text}
                      onChange={this.handleUpdateText}
                    />
                    <TextAreaAutosize
                      className="border-grey-darkest border-t"
                      style={{ resize: "none" }}
                      rows={2}
                      maxRows={4}
                      value={this.props.answer}
                      onChange={this.handleUpdateAnswer}
                    />
                  </div>
                </Collapsible>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Scene;
