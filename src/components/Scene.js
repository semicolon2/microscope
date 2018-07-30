import React, {PureComponent} from 'react';
import Collapsible from 'react-collapsible';
import Tone from './Tone';

class Scene extends PureComponent {
  render() {
    return(
      <div className="border border-t-0 border-grey-darker w-48 rounded text-center" >
          <Collapsible trigger="Scene name" transitionTime={200} lazyRender={true} >
            <div className="w-32 p-1 m-auto text-center" >
              <p className="border-b border-grey-darkest" >Question</p>
              <p>description of events</p>
              <p className="border-t border-grey-darkest" >answer</p>
              <Tone />
             </div>
          </Collapsible>
        </div>
      
    )
  }
}

export default Scene;