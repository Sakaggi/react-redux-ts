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

export const filterByType = (filterByType: string[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FILTER,
            filterBy: filterByType
        })
    }
}

export const selectCurrent = (selectedEvent: LifeEvent) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SELECTCURRENT,
            selectedEvent: selectedEvent
        })
    }
}
export const selectPrevious = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SELECTPREVIOUS
        })
    }
}
export const selectNext = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SELECTNEXT
        })
    }
}

export const reset = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.RESET
        })
    }
}
