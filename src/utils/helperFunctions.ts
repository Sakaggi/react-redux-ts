import { LifeEvent } from "../models/LifeEvent";

const sort = (arr: LifeEvent[], sortBy: keyof LifeEvent, ifAscending: boolean) => {
    let arrTemp = arr.slice(0);
    return arrTemp.sort(function (a, b) {
        var x = ifAscending ? a[sortBy] : b[sortBy];
        var y = ifAscending ? b[sortBy] : a[sortBy];
        return x < y ? -1 : x > y ? 1 : 0;
    })
}

const filter = (arr: LifeEvent[], filterBy: string[]) => {
    let filteredLifeEvents = arr.filter(lifeEvent => {
        return lifeEvent.type.some((type: string) => filterBy.indexOf(type) >= 0) && lifeEvent;
    })
    return filteredLifeEvents;
}

export { sort, filter };