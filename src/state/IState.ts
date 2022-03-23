import { LifeEvent } from "../models/LifeEvent";

export interface IState {
    selectedLifeEvents: LifeEvent[],
    lookAt: LifeEvent
}