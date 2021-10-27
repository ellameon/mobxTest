import {makeObservable, observable, action, computed} from "mobx";


export function counterStoreFunction()  {
return makeObservable({
    count : 0,
    get color() {
        return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'blue'
    },
    decrease() {
        this.count--
    },
    increase() {
        this.count++
    },
}, {
    count: observable,
    color: computed,
    decrease: action.bound,
    increase: action.bound,
})
}
