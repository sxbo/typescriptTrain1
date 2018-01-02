import * as Type from './Type';

export interface IncrementEnthusiasm {
    type:Type.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type:Type.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;
export function incrementEnthusiasm():IncrementEnthusiasm {
    return {
        type:Type.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm() :DecrementEnthusiasm {
 
    return {
        type:Type.DECREMENT_ENTHUSIASM
    }
}