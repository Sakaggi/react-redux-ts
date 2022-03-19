import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { LifeEvent } from "../../models/LifeEvent";

export const sortByName = (ifAscending: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SORTBYNAME,
            ifAscending: ifAscending
        })
    }
}

export const sortByYear = (ifAscending: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SORTBYYEAR,
            ifAscending: ifAscending
        })
    }
}

export const filter = (filterByType: string[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FILTER,
            filterBy: filterByType
        })
    }
}

// export const select = (lifeEvent: LifeEvent) => {
//     return (dispatch: Dispatch<Action>) => {
//         dispatch({
//             type: ActionType.SELECT,
//             selectedEvent: lifeEvent
//         })
//     }
// }

