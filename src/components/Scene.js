import React, {PureComponent} from 'react';
import Collapsible from 'react-collapsible';
import Tone from './Tone';



class Scene extends PureComponent {

  toneTrigger = (
    <div className="flex justify-around m-1" > 
      <p>{this.props.question}</p> 
      <Tone toneHeight="h-6" tone={this.props.tone} /> 
    </div>)

  render() {
    return(
      <div className="border border-t-0 rounded-t-none border-grey-darker w-48 h-auto rounded text-center" >
        <span className="drag-handle"></span>
        <div>
          <Collapsible trigger={this.toneTrigger} transitionTime={200} lazyRender={true} >
            <div className="p-1 m-auto text-center" >
              <p className="border-t border-grey-darkest" >{this.props.text}</p>
              <p className="border-t border-grey-darkest" >{this.props.answer}</p>
            </div>
          </Collapsible>
        </div>
      </div>
    )
  }
}

export default Scene;