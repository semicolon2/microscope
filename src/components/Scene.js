import React, { PureComponent } from "react";
import Collapsible from "react-collapsible";
import { Draggable } from "react-beautiful-dnd";

import Tone from "./Tone";

class Scene extends PureComponent {
  trigger = (
    <div className="flex justify-between">
      <p className="pl-4 text-grey-dark">&#9660;</p>
      <p className="text-grey-dark">&#9660;</p>
      <p className="pr-4 text-grey-dark">&#9660;</p>
    </div>
  );

  openTrigger = (
    <div className="flex justify-between">
      <p className="pl-4 text-grey-darker">&#9650;</p>
      <p className="text-grey-darker">&#9650;</p>
      <p className="pr-4 text-grey-darker">&#9650;</p>
    </div>
  );

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
              <div className="flex flex-row items-center mt-1">
                <p className="m-auto text-center">{this.props.question}</p>
                <Tone
                  classNames="inline m-auto mr-1 cursor-pointer w-6 h-6"
                  tone={this.props.tone}
                />
              </div>
              <div>
                <Collapsible
                  trigger={this.trigger}
                  triggerWhenOpen={this.openTrigger}
                  transitionTime={200}
                >
                  <div className="p-1 m-auto text-center">
                    <p className="border-t border-grey-darkest">
                      {this.props.text}
                    </p>
                    <p className="border-t border-grey-darkest">
                      {this.props.answer}
                    </p>
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
