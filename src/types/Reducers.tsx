import {EnthusiasmAction} from './Action'
import {StoreState} from './Store'
import {INCREMENT_ENTHUSIASM,DECREMENT_ENTHUSIASM} from './Type'

export function enthusiasm (state:StoreState,action:EnthusiasmAction):StoreState {
    switch (action.type){
        case INCREMENT_ENTHUSIASM:
            return {
                ...state,
                enthusiasmlevel:state.enthusiasmlevel +1
            };
        case DECREMENT_ENTHUSIASM :
            return {
                ...state,
                enthusiasmlevel:Math.max(1,state.enthusiasmlevel - 1)
            };
    }
    return state;
}