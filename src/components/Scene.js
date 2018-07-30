import React, {PureComponent} from 'react';
import Collapsible from 'react-collapsible';
import Tone from './Tone';

class Scene extends PureComponent {
  render() {
    return(
      <div className="border border-t-0 border-grey-darker w-48 rounded text-center" >
          <Collapsible trigger={this.props.question} transitionTime={200} lazyRender={true} >
            <div className="p-1 m-auto text-center" >
              <p className="border-t border-grey-darkest" >{this.props.text}</p>
              <p className="border-t border-grey-darkest" >{this.props.answer}</p>
              <Tone tone={this.props.tone} />
             </div>
          </Collapsible>
        </div>
      
    )
  }
}

export default Scene;