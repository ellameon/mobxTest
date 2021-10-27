import React from "react";
import {action, makeObservable, observable, computed, autorun, when, reaction} from "mobx";

export class CounterStoreClass {
    count = 0

    get color() {
        return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'blue'
    }

    constructor() {
        makeObservable(this, {
            count: observable,
            color: computed,
            decrease: action,
            increase: action.bound
        })
        // autorun(() =>
        //     console.log(`count: ${this.count}`)
        // )

        // when(() => this.count > 5, () => console.log(` ${this.count} > 5`))
        reaction(() => this.count, (count, prevCount) => {
            console.log(`prevCount ${prevCount} count ${count}`)
        })
    }

    decrease = () => this.count--

    increase() {
        this.count++
    }
}