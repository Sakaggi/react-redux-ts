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

// interface SelectAction {
//     type: ActionType.SELECT,
//     selectedEvent: LifeEvent
// }

export type Action = SortByNameAction | SortByYearAction | FilterAction;