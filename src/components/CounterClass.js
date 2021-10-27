import React, {Component} from "react";
import {observer} from "mobx-react";
import {runInAction} from "mobx";

import {CounterStoreClass} from '../stores'
//@observer
const store = new CounterStoreClass()

export const CounterClass = observer(class extends Component {
componentDidMount() {
    runInAction(() => {
        store.count = this.props.initialCount ?? 0
    })
}
        render() {
            return (
                <div>
                    <button onClick={store.decrease}>-</button>
                    <span style={{color: store.color}}>{store.count}</span>
                    <button onClick={store.increase}>+</button>
                </div>
            )
        }
    }
)



// import React, {Component} from "react";
// import {observer} from "mobx-react";
// import {action, makeObservable, observable, computed} from "mobx";
//
// //@observer
// export const CounterClass = observer(class extends Component {
//         count = 0
//
//         get color() {
//             return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'blue'
//         }
//
//         constructor(props) {
//             super(props);
//             makeObservable(this, {
//                 count: observable,
//                 color: computed,
//                 decrease: action,
//                 increase: action.bound
//             })
//             this.count = this.props.initialCount ?? 0
//         }
//
//         render() {
//             return (
//                 <div>
//                     <button onClick={this.decrease}>-</button>
//                     <span style={{color: this.color}}>{this.count}</span>
//                     <button onClick={this.increase}>+</button>
//                 </div>
//             )
//         }
//
//         decrease = () => this.count--
//
//
//         increase() {
//             this.count++
//         }
//     }
// )


// import React, {Component} from "react";
//
//
// export class CounterClass extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: this.props.initialCount ?? 0,
//         }
//         this.increase = this.increase.bind(this)
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.decrease}>-</button>
//                 <span>{this.state.count}</span>
//                 <button onClick={this.increase}>+</button>
//             </div>
//         )
//     }
//
//     decrease = () => this.setState(prevState => ({
//         count: prevState.count - 1
//     }))
//
//     increase() {
//         this.setState(prevState => ({
//             count: prevState.count + 1
//         }))
//
//
//     }
// }