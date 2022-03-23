import { IState } from "../IState";
import allLifeEvents from "../../data/allLifeEvents";
import { sort, filter } from "../../utils/helperFunctions";
import { ActionType } from "../action-types";
import { Action } from "../actions";


const initialState = {
    selectedLifeEvents: allLifeEvents,
    lookAt: allLifeEvents[0]
};



const reducer = (state: IState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SORTBYNAME:
            return {
                selectedLifeEvents: sort(state.selectedLifeEvents, 'place' as const, action.ifAscending),
                lookAt: state.lookAt
            }
            break;
        case ActionType.SORTBYYEAR:
            console.log(sort(state.selectedLifeEvents, 'start' as const, action.ifAscending))
            return {
                selectedLifeEvents: sort(state.selectedLifeEvents, 'start' as const, action.ifAscending),
                lookAt: state.lookAt
            }
            break;
        case ActionType.FILTER:
            let filteredLifeEvents = filter(allLifeEvents, action.filterBy);
            return {
                selectedLifeEvents: filteredLifeEvents,
                lookAt: filteredLifeEvents.length > 0 ? filteredLifeEvents[0] : state.lookAt
            }
            break;
        case ActionType.SELECTCURRENT:
            return {
                selectedLifeEvents: state.selectedLifeEvents,
                lookAt: action.selectedEvent
            }
            break;
        case ActionType.SELECTPREVIOUS:
            var i = state.selectedLifeEvents.indexOf(state.lookAt);
            return {
                selectedLifeEvents: state.selectedLifeEvents,
                lookAt: state.selectedLifeEvents[i === 0 ? state.selectedLifeEvents.length - 1 : i - 1]
            }
            break;
        case ActionType.SELECTNEXT:
            // eslint-disable-next-line @typescript-eslint/no-redeclare
            var i = state.selectedLifeEvents.indexOf(state.lookAt);
            return {
                selectedLifeEvents: state.selectedLifeEvents,
                lookAt: state.selectedLifeEvents[i === state.selectedLifeEvents.length - 1 ? 0 : i + 1]
            }
            break;
        case ActionType.RESET:
            state = initialState;
            return state;
        default:
            return state;
            break;
    }
}

export default reducer;