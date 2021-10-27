import {useEffect} from "react";
import React from "react";
import { observer } from "mobx-react";
import {counterStoreFunction} from "../stores";
import {runInAction} from "mobx";

const store = counterStoreFunction()


export const CounterFunction = observer(props => {
    useEffect(() => {
runInAction( () => {
    store.count = props.initialCount ?? 0
})
    }, [props.initialCount])
    return (
        <div>
            <button onClick={store.decrease}>-</button>
            <span style={{color: store.color}}>{store.count}</span>
            <button onClick={store.increase}>+</button>
        </div>
    )
})


// import React  from "react";
// import { useLocalObservable, Observer } from "mobx-react";
//
//
// export const CounterFunction = (props) => {
//
//     const store = useLocalObservable(() => {
//         return {
//             count: props.initialCount ?? 0,
//             decrease() {
//                 this.count--
//             },
//             increase() {
//                 this.count++
//             },
//         }
//     })
//
//     return (
//         <div>
//             <button onClick={store.decrease}>-</button>
//             <Observer>
//                 {() => (<span>{store.count}</span>)}
//             </Observer>
//             <button onClick={store.increase}>+</button>
//         </div>
//     )
// }
//




//
// import React from "react";
// import { observer, useLocalObservable } from "mobx-react";
//
// export const CounterFunction = observer(props => {
//     const store = useLocalObservable(() => {
//         return {
//             count: props.initialCount ?? 0,
//             get color() {
//                 return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'blue'
//             },
//             decrease() {
//                 this.count--
//             },
//             increase() {
//                 this.count++
//             },
//         }
//     })
//     return (
//         <div>
//             <button onClick={store.decrease}>-</button>
//             <span style={{color: store.color}}>{store.count}</span>
//             <button onClick={store.increase}>+</button>
//         </div>
//     )
// })






// import React, {useState} from "react";
//
//
// export function CounterFunction(props) {
//     const [count, setCount] = useState(props.initialCount ?? 0)
//
//     const decrease = () => setCount(prevCount => prevCount - 1)
//     const increase = () => setCount(prevCount => prevCount + 1)
//
//     return (
//         <div>
//             <button onClick={decrease}>-</button>
//             <span>{count}</span>
//             <button onClick={increase}>+</button>
//         </div>
//     )
// }
//
