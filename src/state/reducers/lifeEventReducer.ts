import allLifeEvents from "../../data/allLifeEvents";
import { LifeEvent } from "../../models/LifeEvent";
import { ActionType } from "../action-types";
import { Action } from "../actions";


const initialState = allLifeEvents;

const reducer = (state: LifeEvent[] = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SORTBYNAME:
            return [allLifeEvents[0]];
            break;
        case ActionType.SORTBYYEAR:
            return [allLifeEvents[1]];
            break;
        case ActionType.FILTER:
            return [allLifeEvents[4]];
            break;
        // case ActionType.SELECT:
        //     return [action.selectedEvent]
        default:
            return state;
            break;
    }
}

export default reducer;