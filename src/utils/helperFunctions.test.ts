//helperFunctions.test.ts
/// <reference types="jest" />

import { filter, sort } from "./helperFunctions"
import allLifeEvents from '../data'

test('properly sorts array in ascending order of place', () => {
    expect(sort(allLifeEvents, 'place', true)).toEqual(
        [
            allLifeEvents[1],
            allLifeEvents[5],
            allLifeEvents[3],
            allLifeEvents[4],
            allLifeEvents[6],
            allLifeEvents[0],
            allLifeEvents[2],
            allLifeEvents[7]
        ]
    );
});

test('properly sorts array in descending order of place', () => {
    expect(sort(allLifeEvents, 'place', false)).toEqual(
        [
            allLifeEvents[7],
            allLifeEvents[0],
            allLifeEvents[2],
            allLifeEvents[4],
            allLifeEvents[6],
            allLifeEvents[3],
            allLifeEvents[5],
            allLifeEvents[1]
        ]
    );
});


test('properly sorts array in ascending order of start time', () => {
    expect(sort(allLifeEvents, 'start', true)).toEqual(
        allLifeEvents
    );
});

test('properly sorts array in descending order of start time', () => {
    expect(sort(allLifeEvents, 'start', false)).toEqual(
        [
            allLifeEvents[7],
            allLifeEvents[6],
            allLifeEvents[5],
            allLifeEvents[4],
            allLifeEvents[3],
            allLifeEvents[2],
            allLifeEvents[1],
            allLifeEvents[0]
        ]
    );
});

test('properly filters array', () => {
    expect(filter(allLifeEvents, ["Work"])).toEqual([
        allLifeEvents[5],
        allLifeEvents[7]
    ]);
    expect(filter(allLifeEvents, ["Home"])).toEqual([
        allLifeEvents[0],
        allLifeEvents[1],
        allLifeEvents[2]
    ]);
    expect(filter(allLifeEvents, ["Study"])).toEqual([
        allLifeEvents[1],
        allLifeEvents[2],
        allLifeEvents[3],
        allLifeEvents[6]
    ]);
    expect(filter(allLifeEvents, ["Internship"])).toEqual([
        allLifeEvents[4]
    ]);
    expect(filter(allLifeEvents, ["Home", "Internship"])).toEqual([
        allLifeEvents[0],
        allLifeEvents[1],
        allLifeEvents[2],
        allLifeEvents[4]
    ]);
    expect(filter(allLifeEvents, ["Travel"])).toEqual([]);
    expect(filter(allLifeEvents, ["Travel", "Home", "Study"])).toEqual([
        allLifeEvents[0],
        allLifeEvents[1],
        allLifeEvents[2],
        allLifeEvents[3],
        allLifeEvents[6]
    ]);
})