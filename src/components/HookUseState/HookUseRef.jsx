import { useRef, useEffect, useState} from "react";

const HookUseRef = () => {
    // 1 - USEREF
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    return(
        <div>
            <h2>useRef</h2>
                <p>O componente renderrizou: {numberRef.current}  vezes.</p>
                <p>Couter 1: {counter}</p>
                <button onClick={() => setCounter(anterior => anterior + 1)}>Conatdor A</button>
                <p>Couter 2: {counterB}</p>
                <button onClick={() => setCounterB(anterior => anterior + 1)}>Conatdor B</button>
            <hr />
        </div>
    )
}

export default HookUseRef;