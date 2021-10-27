import {CounterClass, CounterFunction} from "./components";



export default function App() {
    return (
        <>
            <CounterClass initialCount = {5}/>
            <CounterFunction initialCount = {10} />
        </>
    );
}


