// import * as React from 'react';
import * as React from 'react';
import './Hello.css';
import {StoreState} from '../types/Store'
import {connect,Dispatch} from 'react-redux'
import * as actions from '../types/Action'


export interface Props {
  name: string;
  enthusiasmlevel?: number;
  onIncrement?:() =>void;
  onDevrement?:() =>void;
}

class Hello extends React.Component<Props,{}> {
    constructor(props:Props){
      super(props)
    }

    render() {
      const {name,enthusiasmlevel,onDevrement,onIncrement} = this.props
      if (enthusiasmlevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmlevel)}
        </div>
        <div>
          <button onClick={onDevrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

function mapStateToProps({enthusiasmlevel,languageName}:StoreState){
  return {
    enthusiasmlevel,
    name:languageName,
  }
}

function mapDispatchToProps (dispatch :Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement:() =>dispatch(actions.incrementEnthusiasm()),
    onDevrement:() =>dispatch(actions.decrementEnthusiasm()),
  }
}

function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect (mapStateToProps,mapDispatchToProps,mergeProps)(Hello);