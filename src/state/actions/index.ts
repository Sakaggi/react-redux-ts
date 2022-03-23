import { LifeEvent } from "../../models/LifeEvent";
import { ActionType } from "../action-types";

interface SortByNameAction {
    type: ActionType.SORTBYNAME,
    ifAscending: boolean
}
interface SortByYearAction {
    type: ActionType.SORTBYYEAR,
    ifAscending: boolean
}

interface FilterAction {
    type: ActionType.FILTER,
    filterBy: string[]
}

interface SelectCurrentAction {
    type: ActionType.SELECTCURRENT,
    selectedEvent: LifeEvent
}

interface SelectPreviousAction {
    type: ActionType.SELECTPREVIOUS
}
interface SelectNextAction {
    type: ActionType.SELECTNEXT
}
interface ResetAction {
    type: ActionType.RESET
}

export type Action = SortByNameAction | SortByYearAction | FilterAction | SelectCurrentAction | SelectPreviousAction | SelectNextAction | ResetAction;